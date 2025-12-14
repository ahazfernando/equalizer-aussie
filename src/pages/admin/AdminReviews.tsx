"use client";

import { useState } from "react";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, CheckCircle, XCircle, Eye, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AdminReviews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviewList, setReviewList] = useState(reviews);

  const filteredReviews = reviewList.filter(
    (review) =>
      review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.caravanModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleVerified = (id: string) => {
    setReviewList(
      reviewList.map((r) => (r.id === id ? { ...r, verified: !r.verified } : r))
    );
  };

  const deleteReview = (id: string) => {
    setReviewList(reviewList.filter((r) => r.id !== id));
  };

  const averageRating =
    reviewList.length > 0
      ? (
          reviewList.reduce((sum, r) => sum + r.rating, 0) / reviewList.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-heading text-2xl font-bold">Review Management</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Manage customer reviews and ratings
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="admin-card p-4">
          <p className="text-sm text-muted-foreground">Total Reviews</p>
          <p className="text-2xl font-bold mt-1">{reviewList.length}</p>
        </div>
        <div className="admin-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <p className="text-2xl font-bold">{averageRating}</p>
        </div>
        <div className="admin-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-accent" />
            <p className="text-sm text-muted-foreground">Verified</p>
          </div>
          <p className="text-2xl font-bold">
            {reviewList.filter((r) => r.verified).length}
          </p>
        </div>
        <div className="admin-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <XCircle className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Unverified</p>
          </div>
          <p className="text-2xl font-bold">
            {reviewList.filter((r) => !r.verified).length}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search reviews by author, model, or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="admin-card p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{review.author}</p>
                      {review.verified && (
                        <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.location} • {review.caravanModel}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-gold text-gold"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{review.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {review.content}
                </p>
                {review.tripHighlight && (
                  <p className="text-xs text-muted-foreground">
                    Trip highlight: {review.tripHighlight}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleVerified(review.id)}
                  className="w-full sm:w-auto"
                >
                  {review.verified ? (
                    <>
                      <XCircle className="w-4 h-4 mr-2" />
                      Unverify
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Verify
                    </>
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto text-destructive"
                  onClick={() => deleteReview(review.id)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredReviews.length === 0 && (
        <div className="admin-card text-center py-12 text-muted-foreground">
          No reviews found matching your search.
        </div>
      )}
    </div>
  );
}



