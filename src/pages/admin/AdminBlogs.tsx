"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Article } from "@/types/article";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Trash2, Edit, Plus, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Article[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deletingBlogId, setDeletingBlogId] = useState<string | null>(null);
  const [editingBlog, setEditingBlog] = useState<Article | null>(null);
  const [tagInput, setTagInput] = useState("");

  const [blogForm, setBlogForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    imageURL: "",
    tags: [] as string[],
    authorName: "",
    authorAvatarURL: "",
    isPopular: false,
  });

  // Helper function to generate URL-friendly slug
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Helper to convert Firestore Timestamp to ISO string
  const toISOString = (value: any): string => {
    if (!value) return '';
    if (value.toDate && typeof value.toDate === 'function') {
      return value.toDate().toISOString();
    }
    if (typeof value === 'string') {
      return value;
    }
    return '';
  };

  const loadBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const blogsRef = collection(db, 'blogs');
      const snapshot = await getDocs(blogsRef);
      
      const blogsData = snapshot.docs.map(doc => {
        const data = doc.data();
        
        return {
          id: doc.id,
          slug: data.slug || '',
          title: data.title || '',
          excerpt: data.excerpt || '',
          imageURL: data.imageURL || '/blogs/blog1.png',
          tags: data.tags || [],
          content: data.content || '',
          author: data.author || { name: 'Unknown', avatarURL: '' },
          date: toISOString(data.date) || toISOString(data.createdAt),
          createdAt: toISOString(data.createdAt),
          lastUpdated: toISOString(data.lastUpdated),
          isPopular: data.isPopular || false,
        } as Article;
      });

      // Sort by date (newest first)
      blogsData.sort((a, b) => {
        const getDate = (article: Article): number => {
          const dateValue = article.lastUpdated || article.createdAt || article.date;
          if (!dateValue) return 0;
          try {
            if (typeof dateValue === 'string') {
              return new Date(dateValue).getTime();
            }
            return 0;
          } catch {
            return 0;
          }
        };
        return getDate(b) - getDate(a);
      });

      setBlogs(blogsData);
    } catch (error) {
      console.error('Error loading blogs:', error);
      toast.error("Failed to load blogs");
    } finally {
      setLoadingBlogs(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleAddTag = () => {
    if (tagInput.trim() && !blogForm.tags.includes(tagInput.trim())) {
      setBlogForm({
        ...blogForm,
        tags: [...blogForm.tags, tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setBlogForm({
      ...blogForm,
      tags: blogForm.tags.filter(t => t !== tag),
    });
  };

  const handleOpenDialog = (blog?: Article) => {
    if (blog) {
      setEditingBlog(blog);
      setBlogForm({
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        imageURL: blog.imageURL,
        tags: blog.tags || [],
        authorName: blog.author?.name || '',
        authorAvatarURL: blog.author?.avatarURL || '',
        isPopular: blog.isPopular || false,
      });
    } else {
      setEditingBlog(null);
      setBlogForm({
        slug: "",
        title: "",
        excerpt: "",
        content: "",
        imageURL: "",
        tags: [],
        authorName: "",
        authorAvatarURL: "",
        isPopular: false,
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingBlog(null);
    setBlogForm({
      slug: "",
      title: "",
      excerpt: "",
      content: "",
      imageURL: "",
      tags: [],
      authorName: "",
      authorAvatarURL: "",
      isPopular: false,
    });
    setTagInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!blogForm.title || !blogForm.excerpt || !blogForm.content || !blogForm.authorName) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const slug = blogForm.slug || generateSlug(blogForm.title);
      const now = Timestamp.now();
      
      const blogData = {
        slug,
        title: blogForm.title,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        imageURL: blogForm.imageURL || '/blogs/blog1.png',
        tags: blogForm.tags,
        author: {
          name: blogForm.authorName,
          avatarURL: blogForm.authorAvatarURL || '',
        },
        date: editingBlog ? undefined : now, // Only set date on creation
        createdAt: editingBlog ? undefined : now,
        lastUpdated: now,
        isPopular: blogForm.isPopular,
      };

      if (editingBlog) {
        await updateDoc(doc(db, 'blogs', editingBlog.id), blogData);
        toast.success("Blog post updated successfully");
      } else {
        await addDoc(collection(db, 'blogs'), blogData);
        toast.success("Blog post added successfully");
      }
      
      handleCloseDialog();
      loadBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error("Failed to save blog post");
    }
  };

  const handleDeleteClick = (id: string) => {
    setDeletingBlogId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!deletingBlogId) return;

    try {
      await deleteDoc(doc(db, 'blogs', deletingBlogId));
      toast.success("Blog post deleted successfully");
      loadBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error("Failed to delete blog post");
    } finally {
      setIsDeleteDialogOpen(false);
      setDeletingBlogId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts</p>
        </div>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" />
          Add Blog Post
        </Button>
      </div>

      {loadingBlogs ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : blogs.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">No blog posts found</p>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Blog Post
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {blog.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags?.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                    {blog.tags && blog.tags.length > 3 && (
                      <Badge variant="outline">+{blog.tags.length - 3}</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenDialog(blog)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteClick(blog.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingBlog ? "Edit Blog Post" : "Create Blog Post"}</DialogTitle>
            <DialogDescription>
              {editingBlog ? "Update the blog post details" : "Fill in the details to create a new blog post"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (optional, auto-generated from title)</Label>
                <Input
                  id="slug"
                  value={blogForm.slug}
                  onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                  placeholder="url-friendly-slug"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={blogForm.excerpt}
                onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                placeholder="Short description (shown in blog cards)"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content * (Markdown supported)</Label>
              <Textarea
                id="content"
                value={blogForm.content}
                onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                placeholder="Full blog content in Markdown format"
                rows={15}
                required
                className="font-mono text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="imageURL">Image URL</Label>
                <Input
                  id="imageURL"
                  value={blogForm.imageURL}
                  onChange={(e) => setBlogForm({ ...blogForm, imageURL: e.target.value })}
                  placeholder="/blogs/image.png or https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="authorName">Author Name *</Label>
                <Input
                  id="authorName"
                  value={blogForm.authorName}
                  onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })}
                  placeholder="Author name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="authorAvatarURL">Author Avatar URL</Label>
              <Input
                id="authorAvatarURL"
                value={blogForm.authorAvatarURL}
                onChange={(e) => setBlogForm({ ...blogForm, authorAvatarURL: e.target.value })}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  placeholder="Add a tag"
                />
                <Button type="button" onClick={handleAddTag}>Add Tag</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {blogForm.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-2">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isPopular"
                checked={blogForm.isPopular}
                onChange={(e) => setBlogForm({ ...blogForm, isPopular: e.target.checked })}
                className="rounded"
              />
              <Label htmlFor="isPopular">Mark as Popular</Label>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button type="submit">
                {editingBlog ? "Update" : "Create"} Blog Post
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

