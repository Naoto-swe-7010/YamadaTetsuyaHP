import { Blog } from '@/types/blog';
import BlogCard from './BlogCard';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-bold text-white mb-4">
          ブログ記事がまだありません
        </h3>
        <p className="text-gray-300">
          近日中に挑戦の記録や想いを綴った記事を公開予定です。
          お楽しみにお待ちください。
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
      
    </div>

  );
}