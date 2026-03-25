'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset: remove transition temporarily to snap to 0
    el.style.transition = 'none';
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';

    // Force reflow so browser commits the hidden state
    void el.offsetHeight;

    // Fade in
    el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    el.style.opacity = '1';
    el.style.transform = 'none';
  }, [pathname]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
