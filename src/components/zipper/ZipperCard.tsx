'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ZipperCard as ZipperCardType } from '@/lib/types';
import ZipperModal from './ZipperModal';

// In-memory cache shared across all card instances in same session
const detailsCache = new Map<number, import('@/lib/types').ZipperDetails>();

interface ZipperCardProps {
  zipper: ZipperCardType;
}

export default function ZipperCard({ zipper }: ZipperCardProps) {
  const t = useTranslations('zipper');
  const [modalOpen, setModalOpen] = useState(false);

  const prefetch = () => {
    if (!detailsCache.has(zipper.id)) {
      fetch(`/api/zipper/${zipper.id}`)
        .then(r => r.json())
        .then(d => detailsCache.set(zipper.id, d))
        .catch(() => {});
    }
  };

  return (
    <>
      <div
        className="group cursor-pointer bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        onClick={() => setModalOpen(true)}
        onMouseEnter={prefetch}
        onFocus={prefetch}
        tabIndex={0}
        role="button"
        aria-label={`${t('viewDetails')}: ${zipper.name}`}
        onKeyDown={e => e.key === 'Enter' && setModalOpen(true)}
      >
        <div className="overflow-hidden aspect-square bg-gray-50">
          <Image
            src={zipper.thumbnailUrl}
            alt={zipper.thumbnailAlt || zipper.name}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h3 className="font-[Jost] text-sm font-medium text-gray-800 leading-tight line-clamp-2">
            {zipper.name}
          </h3>
        </div>
      </div>

      {modalOpen && (
        <ZipperModal
          id={zipper.id}
          name={zipper.name}
          cache={detailsCache}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
