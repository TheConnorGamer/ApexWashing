"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { img, PHOTOS } from "@/lib/content";

export default function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink">
      <motion.img
        style={{ y }}
        src={img(PHOTOS.villa, 2000)}
        alt="A beautifully restored luxury property"
        className="absolute inset-0 h-[124%] w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/60" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-28 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-gold-soft"
        >
          The Apex Difference
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-4xl font-display text-5xl font-light leading-[1.02] tracking-[-0.02em] text-cream text-balance md:text-7xl lg:text-8xl"
        >
          Ready to see the{" "}
          <span className="font-display italic text-gold-soft">difference?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-bone/80 md:text-lg"
        >
          Join the homeowners and businesses who refuse to settle for ordinary.
          Your free, no-obligation estimate is one click away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="group inline-flex items-center justify-center gap-3 bg-cream px-9 py-4 text-sm font-medium tracking-wide text-ink transition-all duration-500 hover:bg-gold-soft"
          >
            Get Your Free Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="tel:+15550000000"
            className="inline-flex items-center justify-center gap-3 border border-cream/30 px-9 py-4 text-sm font-light tracking-wide text-cream transition-all duration-500 hover:border-cream hover:bg-cream/5"
          >
            Call (555) 000-0000
          </a>
        </motion.div>
      </div>
    </section>
  );
}
