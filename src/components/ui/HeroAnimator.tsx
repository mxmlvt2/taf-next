'use client';
import { useEffect } from 'react';

/**
 * Drop this component inside any hero section.
 * It marks .hero-animate elements: first sets data-will-animate (hides them),
 * then on the next frame adds data-ready (triggers CSS transition to visible).
 * Elements are visible server-side — no flash of invisible content.
 */
export default function HeroAnimator() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.hero-animate'));
    if (els.length === 0) return;

    // Hide all at once (will compute before next paint)
    els.forEach(el => {
      el.setAttribute('data-will-animate', '');
    });

    // Trigger entrance on next paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        els.forEach((el, i) => {
          setTimeout(() => {
            el.removeAttribute('data-will-animate');
            el.setAttribute('data-ready', '');
          }, i * 130);
        });
      });
    });
  }, []);

  return null;
}
