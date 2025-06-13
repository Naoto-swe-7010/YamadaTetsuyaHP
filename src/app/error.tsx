'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="text-center">
        <div className="text-6xl mb-8">⚠️</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          エラーが発生しました
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          申し訳ございませんが、問題が発生しました。再度お試しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset}>
            再試行
          </Button>
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