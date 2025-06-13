import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';
import { Blog } from '@/types/blog';

interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Featured Image */}
      <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
        <Image
          src={blog.photo.url}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Article Header */}
      <header className="mb-8 animate-fade-in">
        <div className="text-accent-400 text-sm mb-4">
          {formatDate(blog.publishedAt)}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {blog.title}
        </h1>
      </header>

      {/* Article Content */}
      <Card variant="glass" className="animate-slide-up">
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
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: blog.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('URLをクリップボードにコピーしました');
                }
              }}
              className="text-accent-400 hover:text-accent-300 transition-colors duration-200"
              aria-label="記事をシェア"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}