import { Layout } from "@/components/layout/Layout";
import { getBlogBySlug, getBlogs } from "@/lib/firebase/firestore";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/components/blog/BlogCard";
import BlogDetailClient from "./BlogDetailClient";
import { Article } from "@/types/article";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const getValidImageUrl = (imageURL: string): string => {
  if (!imageURL || imageURL.trim() === '') {
    return '/blogs/blog1.png';
  }
  
  try {
    new URL(imageURL);
    return imageURL;
  } catch {
    if (imageURL.startsWith('/')) {
      return imageURL;
    }
    return `/blogs/${imageURL}`;
  }
};

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const blog = await getBlogBySlug(decodeURIComponent(slug));
    
    if (!blog) {
      return null;
    }
    
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
    
    const article: Article = {
      id: blog.id,
      slug: blog.slug || '',
      title: blog.title || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      imageURL: blog.imageURL || '/blogs/blog1.png',
      tags: blog.tags || [],
      author: blog.author || { name: 'Unknown', avatarURL: '' },
      date: toISOString(blog.date) || toISOString(blog.createdAt),
      createdAt: toISOString(blog.createdAt),
      lastUpdated: toISOString(blog.lastUpdated),
      isPopular: blog.isPopular || false,
    };
    
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const formattedDate = formatDate(article);

  return (
    <Layout>
      <article className="pt-5 pb-8 md:pt-20 md:pb-12 bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            {/* Date */}
            <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Author */}
            {article.author && (
              <div className="flex items-center gap-3 mb-4">
                {article.author.avatarURL && (
                  <Image
                    src={article.author.avatarURL}
                    alt={article.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-gray-600">{article.author.name}</span>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-md"
                    style={{ 
                      backgroundColor: '#F1F5F9', 
                      color: '#000000',
                      fontSize: '14px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={getValidImageUrl(article.imageURL)}
              alt={article.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Article Content - Markdown */}
          <BlogDetailClient content={article.content} excerpt={article.excerpt} />
        </div>
      </article>
    </Layout>
  );
}

// Generate static params for all blog articles
export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();
    return blogs.map((blog: any) => ({
      slug: blog.slug || blog.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


