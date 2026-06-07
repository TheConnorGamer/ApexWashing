"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { WHY_US, img, PHOTOS, SITE } from "@/lib/content";

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="why" className="relative bg-charcoal py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal>
            <div ref={ref} className="relative aspect-[3/4] overflow-hidden bg-ink">
              <motion.img
                style={{ y }}
                src={img(PHOTOS.lawnCare, 1000)}
                alt="Clean and Green lawn care in Winnipeg"
                className="absolute inset-0 h-[116%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-2xl font-light italic leading-snug text-cream">
                  &ldquo;We started this to help our neighbours — and we take a
                  lot of pride in our work.&rdquo;
                </p>
                <p className="mt-3 eyebrow text-gold-soft/80">
                  {SITE.owners} · {SITE.fullName}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold-soft/70" />
              <span className="eyebrow text-gold-soft">Why Winnipeg Chooses Us</span>
            </div>
            <h2 className="mt-7 max-w-xl font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-5xl">
              Reliable, respectful, and always ready to work.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border-t border-bone/10 sm:grid-cols-2">
            {WHY_US.map((r, i) => (
              <Reveal key={r.n} delay={(i % 2) * 0.08}>
                <div className="group h-full border-b border-bone/10 py-8 sm:px-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-gold-soft/70">{r.n}</span>
                    <h3 className="font-display text-xl font-light text-cream transition-colors duration-300 group-hover:text-gold-soft">
                      {r.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-9 text-sm font-light leading-relaxed text-bone/65">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
