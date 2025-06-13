import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import KeyMessage from '@/components/home/KeyMessage';
import ChallengeSection from '@/components/home/ChallengeSection';
import LatestBlogSection from '@/components/home/LatestBlogSection';
import Loading from '@/components/ui/Loading';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyMessage />
      <ChallengeSection />
      <Suspense
        fallback={
          <div className="py-20 lg:py-32 flex items-center justify-center">
            <div className="text-center">
              <Loading size="lg" />
              <p className="text-white mt-4">ブログを読み込み中...</p>
            </div>
          </div>
        }
      >
        <LatestBlogSection />
      </Suspense>
    </>
  );
}