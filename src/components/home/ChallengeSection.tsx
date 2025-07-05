import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/common/SectionTitle';

export default function ChallengeSection() {
  const challenges = [
    {
      title: "新卒入社後9ヶ月で退職しカナダに出発",
      description: "半年間、日本を離れ、国を超えラクロスの本場であるカナダでの修行を決意。安定した生活を捨て、夢に向かって一歩踏み出しました。",
      icon: "🇨🇦"
    },
    {
      title: "アジア出身選手として初のNational Lacrosse Leagueの選手を目指して挑戦中",
      description: "北米プロリーグで、アジア人初の選手としてプレーすることを目指す。過去の弱い自分を乗り越え、プロ選手になる夢を追いかけています。",
      icon: "🥇"
    },
    {
      title: "挑戦する姿、成長や思考、環境の変化を発信",
      description: "目標に向けて挑戦する過程で得た経験や学びを共有。同じように夢を持つ人たちにとって、少しでも勇気や希望を与えられる存在になりたい。",
      icon: "📢"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Image3.jpg"
          alt="挑戦の背景"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Challenge"
          subtitle="挑戦内容"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              variant="glass"
              className="group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link href="/profile">
            <Button size="lg" variant="outline">
              詳しいプロフィールを見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}