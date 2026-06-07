"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  const go = (dir: number) =>
    setI((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-charcoal py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow text-gold-soft">In Their Words</span>
            <span className="mt-6 text-lg tracking-[0.3em] text-gold-soft">
              ★★★★★
            </span>
          </div>
        </Reveal>

        <div className="relative mt-12 min-h-[320px] md:min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-display text-3xl font-light leading-[1.25] tracking-[-0.01em] text-cream text-balance md:text-[2.75rem] md:leading-[1.2]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-10">
                <p className="font-display text-lg text-cream">{t.name}</p>
                <p className="mt-1 eyebrow text-bone/50">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/20 text-cream transition-all duration-400 hover:border-gold-soft hover:text-gold-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === i ? "w-8 bg-gold-soft" : "w-1.5 bg-bone/25"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/20 text-cream transition-all duration-400 hover:border-gold-soft hover:text-gold-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
