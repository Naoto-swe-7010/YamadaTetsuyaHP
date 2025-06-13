import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { formatDate, truncateText } from '@/lib/utils';
import { Blog } from '@/types/blog';
import Image from 'next/image';

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
<Card
  className="group hover:scale-100 transition-all duration-300 overflow-hidden cursor-pointer animate-slide-up h-full max-w-xs mx-auto sm:max-w-sm"
  style={{ animationDelay: `${index * 0.05}s` }}
>
  <div className="relative w-full aspect-[4/3] overflow-hidden">
    <Image
      src={blog.photo.url}
      alt={blog.title}
      layout="fill"
      objectFit="cover"
      className="group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
  </div>
  
  <CardHeader>
    <div className="text-xs text-accent-400 mb-1">
      {formatDate(blog.publishedAt)}
    </div>
    <h3 className="text-base font-bold text-white group-hover:text-accent-400 transition-colors duration-300 line-clamp-2">
      {blog.title}
    </h3>
  </CardHeader>
  
  <CardContent className="pt-0 flex-1 flex flex-col justify-between">
    <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 mb-2">
      {truncateText(blog.body.replace(/<[^>]*>/g, ''), 100)}
    </p>
    
    <div className="flex items-center text-accent-400 text-xs group-hover:text-accent-300 transition-colors duration-300">
      <span>続きを読む</span>
      <svg
        className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
    </div>
  </CardContent>
</Card>
    </Link>
  );
}