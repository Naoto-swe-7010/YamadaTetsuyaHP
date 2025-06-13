import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, className, align = 'center' }: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        {
          'text-left': align === 'left',
          'text-center': align === 'center',
          'text-right': align === 'right',
        },
        className
      )}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-slide-up">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'w-20 h-1 bg-gradient-accent rounded-full mt-6',
        {
          'mx-0': align === 'left',
          'mx-auto': align === 'center',
          'ml-auto': align === 'right',
        }
      )} />
    </div>
  );
}