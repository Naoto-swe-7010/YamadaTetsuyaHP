import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img6.jpg"
          alt="山田哲也選手のメイン画像"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="block mb-2">TETSUYA</span>
            <span className="text-accent-400">
              YAMADA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 animate-slide-up ">
            Lacrosse Player
          </p>
          
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-white mb-4">
              アジア出身選手として初のNational Lacrosse Leagueの選手を目指して
            </p>
            <p className="text-lg md:text-xl text-white">
              カナダで挑戦中
            </p>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}