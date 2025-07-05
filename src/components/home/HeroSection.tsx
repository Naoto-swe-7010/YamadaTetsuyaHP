"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth >= 1500);
    };
    
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <div 
          className={`absolute inset-0 w-full max-w-[1500px] mx-auto transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={isWideScreen ? {
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          } : {}}
        >
          <Image
            src="/img16.jpeg"
            alt="山田哲也選手のメイン画像"
            fill
            className="object-cover"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        {/* Side gradients for wide screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-100" />
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-20 font-bold transition-opacity duration-1000 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-left">
            <span className="block mb-2">TETSUYA</span>
            <span className="text-accent-400">YAMADA</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 text-left">
            Lacrosse Player
          </p>
          
          <div className="mb-12 text-left">
            <p className="text-lg md:text-xl text-white mb-4">
              アジア出身選手として初の<span className="text-accent-300 font-semibold">National Lacrosse League</span>の選手を目指して
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