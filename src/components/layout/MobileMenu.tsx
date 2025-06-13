'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Navigation from './Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-strong border-t border-white/10 transition-transform duration-300 lg:hidden z-40',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container mx-auto px-4 py-8">
          <Navigation
            className="flex-col space-x-0 space-y-6"
            onItemClick={onClose}
          />
        </div>
      </div>
    </>
  );
}