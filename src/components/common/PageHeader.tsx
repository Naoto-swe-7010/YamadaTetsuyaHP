import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage, className }: PageHeaderProps) {
  return (
    <section className={cn('relative py-24 lg:py-32 flex items-center justify-center', className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}