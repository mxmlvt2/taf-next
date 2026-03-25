'use client';
import { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;       // seconds
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const delayMs = Math.round(delay * 1000);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set hidden state (no transition yet)
    el.style.transition = 'none';
    el.style.opacity = '0';
    if (direction === 'up') el.style.transform = 'translateY(32px)';
    else if (direction === 'left') el.style.transform = 'translateX(28px)';
    else if (direction === 'right') el.style.transform = 'translateX(-28px)';

    // Force reflow to commit hidden state before attaching transition
    void el.offsetHeight;

    // Set up transition for when IO fires
    el.style.transition = `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
