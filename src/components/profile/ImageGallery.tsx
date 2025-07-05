'use client';

import { useState } from 'react';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import Modal from '@/components/ui/Modal';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/Image4.jpg', alt: 'トレーニング風景1' },
    { src: '/Image5.jpg', alt: 'トレーニング風景2' },
    { src: '/Image6.jpg', alt: 'チームでの活動' },
    { src: '/Image12.jpeg', alt: '試合での様子' },
  ];

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Photo Gallery</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={index < 2}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli5WJMdGBHm6xDcnRMO9cAZu9mfhUmCgdYbq2LJlmyVABc/VCg3b9TBnAa6yb7KJbFjbhGKJjwgY+oMjHpXNBvq6PmibpQQjByaJqTFgP6B8mXvg48OsJ9PRR0Nj6zOWmCZLo8tBLnJWpqrCUJWKrYQ==" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="max-w-4xl"
      >
        {selectedImage && (
          <div className="relative aspect-square w-full max-h-[80vh]">
            <ImageWithFallback
              src={selectedImage}
              alt="拡大画像"
              fill
              className="object-contain"
            />
          </div>
        )}
      </Modal>
    </>
  );
}