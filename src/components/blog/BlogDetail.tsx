'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';
import { Blog } from '@/types/blog';
import ShareButton from './ShareButton';

interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">

      {/* Article Header */}
      <header className="mb-8 animate-slide-up">
        <div className="text-accent-400 text-sm mb-4">
          {formatDate(blog.publishedAt)}
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
          {blog.title}
        </h1>
      </header>

      {/* Article Content */}
      <Card variant="glass" className="animate-slide-up mb-8" style={{ animationDelay: '0.2s' }}>
        <CardContent className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </CardContent>
      </Card>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-white/10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            投稿日: {formatDate(blog.publishedAt)}
            {blog.updatedAt !== blog.publishedAt && (
              <span className="ml-4">
                更新日: {formatDate(blog.updatedAt)}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <ShareButton 
              title={blog.title}
            />
          </div>
        </div>
      </footer>
    </article>
  );
}