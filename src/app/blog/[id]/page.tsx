import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetail from '@/components/blog/BlogDetail';
import BlogNavigation from '@/components/blog/BlogNavigation';
import { getBlogById, getBlogs } from '@/lib/microcms';
import { truncateText } from '@/lib/utils';

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  try {
    const blog = await getBlogById(params.id);
    const description = truncateText(blog.body.replace(/<[^>]*>/g, ''), 160);

    return {
      title: blog.title,
      description,
      openGraph: {
        title: `${blog.title} | 山田哲也 | ラクロス選手公式サイト`,
        description,
        images: [blog.photo.url],
        type: 'article',
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description,
        images: [blog.photo.url],
      },
    };
  } catch (error) {
    return {
      title: 'ブログ記事が見つかりません',
      description: '指定されたブログ記事が見つかりませんでした。',
    };
  }
}

export async function generateStaticParams() {
  try {
    const blogs = await getBlogs(100);
    return blogs.contents.map((blog) => ({
      id: blog.id,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  try {
    const [blog, allBlogs] = await Promise.all([
      getBlogById(params.id),
      getBlogs(100)
    ]);

    // Find previous and next blogs
    const currentIndex = allBlogs.contents.findIndex(b => b.id === params.id);
    const previousBlog = currentIndex < allBlogs.contents.length - 1 
      ? allBlogs.contents[currentIndex + 1] 
      : undefined;
    const nextBlog = currentIndex > 0 
      ? allBlogs.contents[currentIndex - 1] 
      : undefined;

    return (
      <div className="py-20 lg:py-32 bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogDetail blog={blog} />
          <BlogNavigation
            currentBlogId={params.id}
            previousBlog={previousBlog ? { 
              id: previousBlog.id, 
              title: previousBlog.title 
            } : undefined}
            nextBlog={nextBlog ? { 
              id: nextBlog.id, 
              title: nextBlog.title 
            } : undefined}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch blog:', error);
    notFound();
  }
}