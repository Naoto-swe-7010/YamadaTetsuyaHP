import Link from 'next/link';
import Button from '@/components/ui/Button';

interface BlogNavigationProps {
  currentBlogId: string;
  previousBlog?: { id: string; title: string };
  nextBlog?: { id: string; title: string };
}

export default function BlogNavigation({ 
  currentBlogId, 
  previousBlog, 
  nextBlog 
}: BlogNavigationProps) {
  return (
    <nav className="mt-16 pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Previous Blog */}
        <div className="w-full sm:w-auto">
          {previousBlog ? (
            <Link href={`/blog/${previousBlog.id}`}>
              <Button variant="outline" className="w-full sm:w-auto group">
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">前の記事</div>
                  <div className="text-sm font-medium truncate max-w-32">
                    {previousBlog.title}
                  </div>
                </div>
              </Button>
            </Link>
          ) : (
            <div className="w-full sm:w-auto" />
          )}
        </div>

        {/* Back to Blog List */}
        <div className="w-full sm:w-auto">
          <Link href="/blog">
            <Button variant="secondary" className="w-full sm:w-auto">
              ブログ一覧に戻る
            </Button>
          </Link>
        </div>

        {/* Next Blog */}
        <div className="w-full sm:w-auto">
          {nextBlog ? (
            <Link href={`/blog/${nextBlog.id}`}>
              <Button variant="outline" className="w-full sm:w-auto group">
                <div className="text-right">
                  <div className="text-xs text-gray-400">次の記事</div>
                  <div className="text-sm font-medium truncate max-w-32">
                    {nextBlog.title}
                  </div>
                </div>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </Link>
          ) : (
            <div className="w-full sm:w-auto" />
          )}
        </div>
      </div>
    </nav>
  );
}