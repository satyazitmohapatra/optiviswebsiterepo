"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function useIsPointerFine() {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia("(pointer: fine)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isPointerFine = useIsPointerFine();

  useEffect(() => {
    if (!isPointerFine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrameId: number;
    let isVisible = false;
    let isHovered = false;
    let isOverText = false;
    let isMouseDown = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateCursorPosition = () => {
      ringX = lerp(ringX, mouseX, 0.18);
      ringY = lerp(ringY, mouseY, 0.18);

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${
          isMouseDown ? "scale(0.7)" : isHovered ? "scale(1.2)" : "scale(1)"
        }`;
      }

      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) ${
          isMouseDown ? "scale(0.85)" : isHovered ? "scale(1.4)" : "scale(1)"
        }`;
      }

      animFrameId = requestAnimationFrame(updateCursorPosition);
    };

    let lastTarget: HTMLElement | null = null;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.classList.add("cursor-visible");
        ring.classList.add("cursor-visible");
      }

      const target = e.target as HTMLElement | null;
      if (target && target !== lastTarget) {
        lastTarget = target;

        const interactive = target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], select, label[for], summary, [data-cursor="hover"]'
        );
        if (interactive !== null) {
          if (!isHovered) {
            isHovered = true;
            dot.classList.add("cursor-hover");
            ring.classList.add("cursor-hover");
          }
        } else {
          if (isHovered) {
            isHovered = false;
            dot.classList.remove("cursor-hover");
            ring.classList.remove("cursor-hover");
          }
        }

        const isTextInput = target.closest(
          'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]'
        );
        if (isTextInput !== null) {
          if (!isOverText) {
            isOverText = true;
            dot.classList.add("cursor-hidden");
            ring.classList.add("cursor-hidden");
          }
        } else {
          if (isOverText) {
            isOverText = false;
            dot.classList.remove("cursor-hidden");
            ring.classList.remove("cursor-hidden");
          }
        }
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.classList.remove("cursor-visible");
      ring.classList.remove("cursor-visible");
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.classList.add("cursor-visible");
      ring.classList.add("cursor-visible");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animFrameId = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrameId);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <div className="custom-cursor-wrapper" aria-hidden="true">
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </div>
  );
}
