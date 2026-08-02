"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global listener for anchor links (#section) to trigger Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement, {
              offset: -70,
              duration: 1.3,
            });
          }
        }
      }
    };

    // Keep Lenis scroll bounds in sync with dynamic document height
    const handleResize = () => {
      lenis.resize();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (document.body) resizeObserver.observe(document.body);
    if (document.documentElement) resizeObserver.observe(document.documentElement);

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    // Initial delayed resizes as lazy images and dynamic components render
    const t1 = setTimeout(handleResize, 500);
    const t2 = setTimeout(handleResize, 1500);
    const t3 = setTimeout(handleResize, 3000);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
