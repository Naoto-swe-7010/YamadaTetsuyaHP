import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="text-center">
        <div className="text-6xl mb-8">📝</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          ブログ記事が見つかりません
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          指定されたブログ記事は存在しないか、削除された可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <Button size="lg">
              ブログ一覧に戻る
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" size="lg">
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}