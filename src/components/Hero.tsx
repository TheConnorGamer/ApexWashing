"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="A beautifully maintained green lawn at a Winnipeg home"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="animate-kenburns h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 md:px-10 md:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold-soft/70" />
          <span className="eyebrow text-gold-soft">
            <span className="text-gold-soft">Spring Cleanup Special</span>
            <span className="mx-2 hidden text-bone/40 sm:inline">·</span>
            <span className="block sm:inline">Winnipeg, MB · Est. {SITE.est}</span>
          </span>
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-[2.6rem] font-light leading-[1.02] tracking-[-0.02em] text-cream text-balance sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          {["Windows clean.", "Grass looking"].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.65 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {line}{" "}
              {i === 1 && (
                <span className="font-display italic text-gold-soft">green.</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-bone/85 md:text-lg"
        >
          Professional window cleaning and lawn care for Winnipeg homes — run by{" "}
          {SITE.owners}. Reliable, respectful, and detailed. We help neighbours
          keep their properties clean, fresh, and well taken care of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#booking"
            className="group inline-flex items-center justify-center gap-3 bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-all duration-500 hover:bg-gold-soft"
          >
            Get Your Free Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#results"
            className="group inline-flex items-center justify-center gap-3 border border-cream/30 px-8 py-4 text-sm font-light tracking-wide text-cream transition-all duration-500 hover:border-cream hover:bg-cream/5"
          >
            View Results
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="eyebrow text-[0.6rem] text-bone/50">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-bone/20">
          <motion.span
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-4 bg-gold-soft"
          />
        </span>
      </motion.div>
    </section>
  );
}
