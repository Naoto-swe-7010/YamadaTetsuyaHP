'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'ホーム' },
  { href: '/profile', label: 'プロフィール' },
  { href: '/blog', label: 'ブログ' },
  { href: '/contact', label: 'お問い合わせ' },
];

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export default function Navigation({ className, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex space-x-8', className)}>
      {navigationItems.map((item) => {
        const isActive = pathname === item.href || 
          (item.href !== '/' && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'relative py-2 text-base lg:text-sm font-medium transition-all duration-200 hover:text-accent-400 whitespace-nowrap',
              isActive
                ? 'text-accent-400'
                : 'text-white hover:text-accent-400'
            )}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-accent rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}