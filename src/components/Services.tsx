"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { img, SERVICES } from "@/lib/content";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-charcoal-soft py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold-soft/70" />
                <span className="eyebrow text-gold-soft">What We Do</span>
              </div>
              <h2 className="mt-7 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-6xl">
                Window cleaning and lawn care, done right.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm font-light leading-relaxed text-bone/65">
              From streak-free glass to crisp lawn edges — we handle the
              exterior details that make your property shine.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden bg-charcoal p-8 md:min-h-[460px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(s.photo, 900)}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10 transition-opacity duration-700 group-hover:from-ink/95" />

                <div className="relative z-10">
                  <span className="font-display text-sm text-gold-soft/80">
                    {s.index}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-light tracking-tight text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-light tracking-wide text-bone/55">
                    {s.blurb}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: active === i ? "auto" : 0,
                      opacity: active === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm font-light leading-relaxed text-bone/75">
                      {s.detail}
                    </p>
                  </motion.div>

                  <div className="mt-5 flex items-center gap-2 text-xs tracking-wide text-gold-soft/0 transition-colors duration-500 group-hover:text-gold-soft">
                    <span className="eyebrow text-[0.62rem]">Learn more</span>
                    <span className="h-px w-6 bg-gold-soft/60" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
