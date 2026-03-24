'use client';
import { useState } from 'react';
import Image from 'next/image';

// ── Zipper Comparison Tabs ───────────────────────────────────────────────────

export interface TabData {
  label: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  applications: string;
  durability: string;
  flexibility: string;
  weight: string;
  cost: string;
}

interface ZipperTabsProps {
  tabs: TabData[];
  locale: string;
}

export function ZipperTabs({ tabs, locale }: ZipperTabsProps) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const isEn = locale === 'en';

  const L = {
    prosAndCons: isEn ? 'Pros and Cons:' : 'Zalety i wady:',
    pro: isEn ? 'Pro:' : 'Zaleta:',
    con: isEn ? 'Con:' : 'Wada:',
    typicalApplications: isEn ? 'Typical Applications:' : 'Typowe zastosowania:',
    durability: isEn ? 'Durability' : 'Trwałość',
    flexibility: isEn ? 'Flexibility' : 'Elastyczność',
    weight: isEn ? 'Weight' : 'Waga',
    cost: isEn ? 'Cost' : 'Koszt',
  };

  return (
    <div className="my-10 not-prose">
      <div className="flex justify-center mb-8">
        <div className="flex border border-gray-200">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`font-[Jost] text-sm px-8 py-3 border-r last:border-r-0 border-gray-200 transition-colors ${
                i === active ? 'bg-[#111] text-white' : 'bg-white text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 bg-white border border-gray-100 shadow-sm p-6">
          <h3 className="font-[Jost] text-xl font-bold text-[#111] mb-3">{tab.title}</h3>
          <p className="font-[Jost] text-sm text-gray-600 leading-relaxed mb-4">{tab.description}</p>
          <p className="font-[Jost] text-sm font-bold text-[#111] mb-2">{L.prosAndCons}</p>
          <ul className="space-y-1.5 mb-4">
            {tab.pros.map((p, i) => (
              <li key={i} className="font-[Jost] text-sm text-gray-600 flex gap-1.5">
                <span className="font-bold text-[#111] flex-shrink-0">{L.pro}</span>{p}
              </li>
            ))}
            {tab.cons.map((c, i) => (
              <li key={i} className="font-[Jost] text-sm text-gray-600 flex gap-1.5">
                <span className="font-bold text-[#111] flex-shrink-0">{L.con}</span>{c}
              </li>
            ))}
          </ul>
          <p className="font-[Jost] text-sm font-bold text-[#111] mb-1">{L.typicalApplications}</p>
          <p className="font-[Jost] text-sm text-gray-600">{tab.applications}</p>
        </div>
        <div className="lg:w-64 grid grid-cols-2 gap-3 flex-shrink-0">
          {[
            { label: L.durability, value: tab.durability },
            { label: L.flexibility, value: tab.flexibility },
            { label: L.weight, value: tab.weight },
            { label: L.cost, value: tab.cost },
          ].map(s => (
            <div key={s.label} className="bg-gray-100 p-4 text-center">
              <p className="font-[Jost] text-xs font-bold text-[#111] mb-2">{s.label}</p>
              <p className="font-[Jost] text-base font-medium text-[#b05050]">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Image Toggle ─────────────────────────────────────────────────────────────

export interface ToggleItem {
  label: string;
  src: string;
  description: string;
}

export function ImageToggle({ items }: { items: ToggleItem[] }) {
  const [active, setActive] = useState(0);
  const item = items[active];
  return (
    <div className="my-8 not-prose">
      <div className="flex gap-3 mb-5">
        {items.map((it, i) => (
          <button
            key={it.label}
            onClick={() => setActive(i)}
            className={`font-[Jost] text-sm px-6 py-2 border transition-colors ${
              i === active
                ? 'bg-[#111] text-white border-[#111]'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative w-full sm:w-72 aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
          <Image src={item.src} alt={item.label} fill className="object-cover" sizes="320px" />
        </div>
        <p className="font-[Jost] text-sm text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

// ── Side-by-Side Images ──────────────────────────────────────────────────────

export interface SideBySideItem {
  label: string;
  src: string;
  description: string;
}

export function SideBySideImages({ items }: { items: SideBySideItem[] }) {
  return (
    <div className="my-8 not-prose grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map(item => (
        <div key={item.label}>
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-3">
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <h4 className="font-[Jost] font-bold text-sm text-[#111] mb-1">{item.label}</h4>
          <p className="font-[Jost] text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// ── Icon Box Grid ────────────────────────────────────────────────────────────

export interface IconBox {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function IconBoxGrid({ boxes }: { boxes: IconBox[] }) {
  return (
    <div className="my-8 not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
      {boxes.map((box, i) => (
        <div key={i} className="bg-[#f5f3ef] p-6">
          <div className="w-12 h-12 bg-[#111] flex items-center justify-center mb-4 text-white text-xl">
            {box.icon}
          </div>
          <h4 className="font-[Jost] font-bold text-sm text-[#111] mb-2">{box.title}</h4>
          <p className="font-[Jost] text-sm text-gray-600 leading-relaxed">{box.text}</p>
        </div>
      ))}
    </div>
  );
}

// ── Steps Process ────────────────────────────────────────────────────────────

export interface Step {
  title: string;
  text: string;
}

export function StepsProcess({ steps }: { steps: Step[] }) {
  return (
    <div className="my-8 not-prose grid grid-cols-1 sm:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div key={i}>
          <div className="w-10 h-10 rounded-full bg-[#111] text-white font-[Jost] font-bold flex items-center justify-center text-sm mb-4">
            {i + 1}
          </div>
          <h4 className="font-[Jost] font-bold text-sm text-[#111] mb-2">{step.title}</h4>
          <p className="font-[Jost] text-sm text-gray-600 leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
