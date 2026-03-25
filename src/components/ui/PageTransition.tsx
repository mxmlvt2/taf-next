'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Scroll to top instantly (before transition starts)
    window.scrollTo(0, 0);

    // Snap to hidden — no transition yet
    el.style.transition = 'none';
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';

    // Force reflow so the browser commits opacity:0
    void el.offsetHeight;

    // rAF: browser paints the opacity:0 frame, THEN we set the transition
    // so it has a real "from" state to animate from
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, [pathname]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
