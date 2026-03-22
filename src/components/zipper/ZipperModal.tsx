'use client';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { ZipperDetails } from '@/lib/types';

interface ZipperModalProps {
  id: number;
  name: string;
  cache: Map<number, ZipperDetails>;
  onClose: () => void;
}

export default function ZipperModal({ id, name, cache, onClose }: ZipperModalProps) {
  const t = useTranslations('zipper');
  const [data, setData] = useState<ZipperDetails | null>(cache.get(id) || null);
  const [loading, setLoading] = useState(!cache.has(id));

  useEffect(() => {
    if (!cache.has(id)) {
      fetch(`/api/zipper/${id}`)
        .then(r => r.json())
        .then(d => {
          cache.set(id, d);
          setData(d);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, cache]);

  // Close on Escape
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto flex flex-col sm:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 hover:bg-gray-100 text-gray-600 hover:text-black transition-colors"
          aria-label={t('close')}
        >
          <X size={18} />
        </button>

        {loading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
          </div>
        ) : data ? (
          <>
            {/* Left: Image */}
            <div className="sm:w-1/2 overflow-hidden flex-shrink-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={data.thumbnailUrl}
                  alt={data.thumbnailAlt || data.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="sm:w-1/2 p-6 flex flex-col overflow-y-auto">
              <h2 className="font-[Jost] text-2xl font-normal text-black mb-4 mt-2 leading-snug">
                {data.name}
              </h2>

              {data.description && (
                <p
                  className="font-[Jost] font-light text-sm text-gray-600 leading-relaxed mb-5"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              )}

              {data.specs && data.specs.length > 0 && (
                <div className="mt-auto">
                  <h3 className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    {t('specifications')}
                  </h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {data.specs.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-1.5 px-3 font-[Jost] font-medium text-gray-700 text-xs w-1/2">
                            {spec.label}
                          </td>
                          <td className="py-1.5 px-3 font-[Jost] text-gray-600 text-xs">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="w-full p-8 text-center">
            <p className="font-[Jost] text-gray-400">Could not load details.</p>
          </div>
        )}
      </div>
    </div>
  );
}
