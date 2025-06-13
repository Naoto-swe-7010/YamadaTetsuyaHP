'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white hover:text-accent-400 transition-all duration-300 group flex-shrink-0"
          >
            <span className="text-accent-400 drop-shadow-lg">
              TETSUYA
            </span>
            <span className="ml-1 sm:ml-2 text-white drop-shadow-lg">YAMADA</span>
            <div className="h-0.5 bg-gradient-to-r from-accent-400 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
          </Link>

          {/* Desktop Navigation - Only show on large screens */}
          <div className="hidden lg:flex">
            <Navigation />
          </div>

          {/* Mobile Menu Button - Show on smaller screens */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center group drop-shadow-lg flex-shrink-0"
            aria-label="メニューを開く"
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-accent-400 absolute',
                isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-accent-400',
                isMobileMenuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-accent-400 absolute',
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}