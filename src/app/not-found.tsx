import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="text-center">
        <div className="text-6xl mb-8">🔍</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          ページが見つかりません
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              ホームに戻る
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" size="lg">
              ブログを見る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}