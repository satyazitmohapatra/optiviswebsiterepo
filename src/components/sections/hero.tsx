"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useBookingModal } from "@/lib/booking/booking-context";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustText?: string;
};

export function Hero({
  subheadline = "We provide next-generation digital services and consulting to help enterprises accelerate their transformation journey, build resilience, and unlock new possibilities",
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { openBookingModal } = useBookingModal();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-white text-slate-900 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Main Headline (Exact Same-to-Same Layout) */}
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-black leading-[1.08] mb-6">
              Navigate Your<br />
              Digital<br />
              Transformation
            </h1>

            {/* Subheadline Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-9">
              {subheadline}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-row items-center gap-4 w-full sm:w-auto mb-14">
              <button
                type="button"
                onClick={() => openBookingModal("Digital Transformation")}
                className="rounded-2xl bg-[#E8A33D] hover:bg-[#d99432] text-slate-950 font-bold px-7 py-4 text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                Schedule A Strategy Call
              </button>

              <a
                href="#services"
                className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-7 py-4 text-sm transition-all duration-200 shadow-sm"
              >
                Explore Services
              </a>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="flex items-center gap-6 sm:gap-10 pt-4 w-full border-t border-slate-100">
              {/* Metric 1 */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">99.9%+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1">Model Precision</div>
              </div>

              {/* Vertical Divider */}
              <div className="h-10 w-[1px] bg-slate-200" />

              {/* Metric 2 */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">1.2M+</div>
                <div className="text-xs font-semibold text-slate-500 mt-1">Req/sec API Throughput</div>
              </div>

              {/* Vertical Divider */}
              <div className="h-10 w-[1px] bg-slate-200" />

              {/* Metric 3 */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">8.4 ms</div>
                <div className="text-xs font-semibold text-slate-500 mt-1">Avg Latency</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Portrait + Soft Blue Circle Glow + 4 Floating White Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
            
            {/* Background Soft Light-Blue Circular Radial Glow & Orbiting Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] rounded-full bg-gradient-to-tr from-blue-100/70 via-indigo-100/50 to-blue-50/20 blur-2xl" />
              <div className="absolute h-[420px] w-[420px] sm:h-[500px] sm:w-[500px] rounded-full border border-blue-200/40" />
            </div>

            {/* 3D Pixar Executive Mascot Image */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero_mascot_executive.png"
                alt="Optivis 3D Executive Mascot"
                className="w-full h-auto object-contain rounded-3xl drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* 1. Floating Card Top-Right: CLOUD ARCHITECTURE */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-6 right-0 sm:-right-4 z-20 p-3 sm:p-3.5 pr-5 sm:pr-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/10 flex items-center gap-3.5"
              style={{
                transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * -15}px, 0)`,
              }}
            >
              <div className="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 flex-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">CLOUD ARCHITECTURE</span>
                <span className="text-xs font-bold text-slate-900">Sub-10ms Multi-Region</span>
              </div>
            </motion.div>

            {/* 2. Floating Card Middle-Right: AI ANALYTICS */}
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-44 right-2 sm:-right-6 z-20 p-3 sm:p-3.5 pr-5 sm:pr-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/10 flex items-center gap-3.5"
              style={{
                transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 15}px, 0)`,
              }}
            >
              <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 flex-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">AI ANALYTICS</span>
                <span className="text-xs font-bold text-slate-900">99.9% Model Precision</span>
              </div>
            </motion.div>

            {/* 3. Floating Card Bottom-Left: API THROUGHPUT */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-0 sm:-left-6 z-20 p-3 sm:p-3.5 pr-5 sm:pr-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/10 flex items-center gap-3.5"
              style={{
                transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * 20}px, 0)`,
              }}
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 flex-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">API THROUGHPUT</span>
                <span className="text-xs font-bold text-slate-900">Req/ Sec API Throughput</span>
              </div>
            </motion.div>

            {/* 4. Floating Card Bottom-Right: SECURITY SHIELD */}
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute bottom-6 right-2 sm:-right-2 z-20 p-3 sm:p-3.5 pr-5 sm:pr-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/10 flex items-center gap-3.5"
              style={{
                transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 25}px, 0)`,
              }}
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 flex-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">SECURITY SHIELD</span>
                <span className="text-xs font-bold text-slate-900">Bank-Grade ISO Certified</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to learn more about Optivis"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 group text-slate-400 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-primary flex justify-center p-1 backdrop-blur-sm bg-white/50 transition-colors">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll-dot" />
        </div>
        <svg className="w-3.5 h-3.5 animate-bounce text-slate-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
