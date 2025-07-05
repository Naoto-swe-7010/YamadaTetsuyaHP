'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className,
  fallbackSrc = '/Image11.png',
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  objectFit = 'cover',
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'bg-gray-800 flex items-center justify-center text-gray-400',
          className
        )}
        style={{ width, height }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' ? 'object-cover' : 
          objectFit === 'contain' ? 'object-contain' :
          objectFit === 'fill' ? 'object-fill' :
          objectFit === 'none' ? 'object-none' :
          'object-scale-down'
        )}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        {...props}
      />
      {isLoading && (
        <div className={cn(
          'absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center',
          className
        )}>
          <div className="w-6 h-6 border-2 border-accent-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}