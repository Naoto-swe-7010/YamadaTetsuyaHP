import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/common/SectionTitle';
import BlogCard from './BlogCard';
import { getLatestBlogs } from '@/lib/microcms';

export default async function LatestBlogSection() {
  const blogs = await getLatestBlogs(6);

  return (
    <section className="relative py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Img10.jpg"
          alt="ブログセクション背景"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-dark" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Latest Blog"
          subtitle="最新のブログ記事"
        />

        {blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link href="/blog">
                <Button size="lg" variant="outline">
                  すべてのブログを見る
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-white mb-4">
              ブログ記事を準備中です
            </h3>
            <p className="text-gray-300 mb-8">
              近日中に挑戦の記録や想いを綴った記事を公開予定です。
              お楽しみにお待ちください。
            </p>
            <Link href="/contact">
              <Button variant="outline">
                お問い合わせはこちら
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}