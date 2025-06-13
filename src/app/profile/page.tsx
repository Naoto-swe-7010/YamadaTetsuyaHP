import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import ProfileImage from '@/components/profile/ProfileImage';
import ProfileTable from '@/components/profile/ProfileTable';
import ChallengeStory from '@/components/profile/ChallengeStory';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: '山田哲也選手の詳細なプロフィール情報。生年月日、所属チーム、経歴、挑戦のきっかけなどを紹介しています。',
  openGraph: {
    title: 'プロフィール | 山田哲也 | ラクロス選手公式サイト',
    description: '山田哲也選手の詳細なプロフィール情報。生年月日、所属チーム、経歴、挑戦のきっかけなどを紹介しています。',
    images: ['/img2.jpeg'],
  },
};

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        title="Profile"
        subtitle="プロフィール"
        backgroundImage="/img5.jpg"
      />

      <section className="py-20 lg:py-32 bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Image */}
          <div className="text-center mb-16">
            <ProfileImage />
          </div>

          {/* Profile Content */}
          <div className="max-w-6xl mx-auto">
            {/* Profile Table */}
            <div className="mb-16">
              <ProfileTable />
            </div>

            {/* Challenge Story */}
            <div>
              <ChallengeStory />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}