"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Card3DProps = {
  children: React.ReactNode;
  className?: string;
  depth?: number;
};

export function Card3D({ children, className = "", depth = 12 }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const rotateX = useSpring(rawX, { stiffness: 240, damping: 20 });
  const rotateY = useSpring(rawY, { stiffness: 240, damping: 20 });
  const springOpacity = useSpring(glareOpacity, { stiffness: 200, damping: 25 });

  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rawX.set(((y - centerY) / centerY) * -depth);
    rawY.set(((x - centerX) / centerX) * depth);
    glareX.set((x / rect.width) * 100);
    glareY.set((y / rect.height) * 100);
    glareOpacity.set(0.18);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Specular Light Sheen Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30"
        style={{
          opacity: springOpacity,
          background: glareBackground,
        }}
      />
      {children}
    </motion.div>
  );
}
