"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";

type MagneticButtonProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    rawX.set(middleX * strength);
    rawY.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
