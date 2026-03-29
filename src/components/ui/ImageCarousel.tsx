'use client';
import { useState } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  images: CarouselImage[];
  className?: string;
}

export default function ImageCarousel({ images, className = '' }: Props) {
  const [idx, setIdx] = useState(0);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0 relative aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === idx ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
