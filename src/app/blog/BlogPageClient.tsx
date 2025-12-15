"use client";

import React from 'react';
import { BlogCard } from '@/components/blog/BlogCard';
import { Article } from '@/types/article';

interface BlogPageClientProps {
  articles: Article[];
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

export default function BlogPageClient({ articles }: BlogPageClientProps) {
  return (
    <section className="pt-5 pb-8 md:pt-20 md:pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Explore Insights in Our Blog
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-black max-w-3xl mx-auto">
            Are you a fan of getting knowing more about Victoria with us, if so here&apos;s the chance
          </p>
        </div>

        {/* Blog Cards Grid - Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map(article => (
            <BlogCard 
              key={article.id} 
              article={article} 
              getValidImageUrl={getValidImageUrl} 
            />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog articles found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

