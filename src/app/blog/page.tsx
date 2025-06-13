import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import BlogList from '@/components/blog/BlogList';
import Loading from '@/components/ui/Loading';
import { getBlogs } from '@/lib/microcms';

export const metadata: Metadata = {
  title: 'ブログ',
  description: '山田哲也選手の挑戦の記録、思考や環境の変化を綴ったブログ記事の一覧です。カナダでの修行やオリンピックへの挑戦について発信しています。',
  openGraph: {
    title: 'ブログ | 山田哲也 | ラクロス選手公式サイト',
    description: '山田哲也選手の挑戦の記録、思考や環境の変化を綴ったブログ記事の一覧です。',
    images: ['/img7.jpeg'],
  },
};

async function BlogContent() {
  try {
    const blogData = await getBlogs(20);
    return <BlogList blogs={blogData.contents} />;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold text-white mb-4">
          ブログの読み込みに失敗しました
        </h3>
        <p className="text-gray-300">
          しばらく時間をおいてから再度アクセスしてください。
        </p>
      </div>
    );
  }
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="挑戦の記録"
        backgroundImage="/img4.jpg"
      />

      <section className="py-20 lg:py-32 bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <Loading size="lg" />
                  <p className="text-white mt-4">ブログを読み込み中...</p>
                </div>
              </div>
            }
          >
            <BlogContent />
          </Suspense>
        </div>
      </section>
    </>
  );
}