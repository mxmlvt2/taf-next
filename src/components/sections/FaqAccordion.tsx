'use client';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  locale?: string;
}

export default function FaqAccordion({ items, locale = 'en' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-8">
        {locale === 'en' ? 'Frequently Asked Questions' : 'Najczęściej zadawane pytania'}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-[Jost] font-normal text-base text-[#2c3e50] leading-snug">
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 text-2xl font-light text-gray-500 transition-transform duration-300"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out bg-white"
                style={{ maxHeight: isOpen ? '600px' : '0px' }}
              >
                <div
                  className="px-6 py-5 font-[Jost] text-sm text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
