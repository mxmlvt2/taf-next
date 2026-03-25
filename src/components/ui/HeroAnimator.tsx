'use client';
import { useEffect } from 'react';

/**
 * Sets hero elements (.hero-animate) to opacity:0 instantly,
 * forces a reflow so the browser commits that state,
 * then adds a CSS transition and sets opacity:1 → the transition is visible.
 * Uses requestAnimationFrame so the hero image has loaded first.
 */
export default function HeroAnimator() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.hero-animate')
    );
    if (!els.length) return;

    requestAnimationFrame(() => {
      // 1. Instantly hide — no transition yet
      els.forEach(el => {
        el.style.transition = 'none';
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
      });

      // 2. Force the browser to commit the hidden state (key step)
      void document.body.offsetHeight;

      // 3. Now set transitions and reveal — browser sees 0→1 delta → transition fires
      els.forEach((el, i) => {
        const delay = i * 130;
        el.style.transition = `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
  }, []);

  return null;
}
