"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { img, PHOTOS } from "@/lib/content";

const REASONS = [
  {
    n: "01",
    title: "Guaranteed arrival times",
    body: "We commit to a window and we keep it. You receive a confirmed appointment and a courtesy notice when our crew is en route.",
  },
  {
    n: "02",
    title: "Fully insured & bonded team",
    body: "Comprehensive liability and worker coverage on every job. Background-checked technicians, uniformed and professional.",
  },
  {
    n: "03",
    title: "Commercial-grade equipment",
    body: "Hot-water units, surface cleaners and soft-wash systems calibrated to each material — never a one-size-fits-all blast.",
  },
  {
    n: "04",
    title: "Transparent, fixed pricing",
    body: "A clear written estimate before we begin. No surprises, no upsells, no hourly meter running while you watch.",
  },
  {
    n: "05",
    title: "Property protection process",
    body: "We pre-soak landscaping, shield fixtures and lighting, and conduct a walkthrough so nothing is left to chance.",
  },
  {
    n: "06",
    title: "Satisfaction guarantee",
    body: "If a surface isn't right, we return and make it right. Your approval is the only definition of done.",
  },
];

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
        {/* Sticky image side */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal>
            <div ref={ref} className="relative aspect-[3/4] overflow-hidden bg-ink">
              <motion.img
                style={{ y }}
                src={img(PHOTOS.craftsman, 1000)}
                alt="Apex technician detailing a luxury home exterior"
                className="absolute inset-0 h-[116%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-2xl font-light italic leading-snug text-cream">
                  &ldquo;We don&rsquo;t cut corners — we clean them.&rdquo;
                </p>
                <p className="mt-3 eyebrow text-gold-soft/80">
                  The Apex Standard
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Content side */}
        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold-soft/70" />
              <span className="eyebrow text-gold-soft">Why Clients Choose Us</span>
            </div>
            <h2 className="mt-7 max-w-xl font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-5xl">
              Premium isn&rsquo;t the price. It&rsquo;s the standard.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border-t border-bone/10 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.n} delay={(i % 2) * 0.08}>
                <div className="group h-full border-b border-bone/10 py-8 sm:px-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-gold-soft/70">
                      {r.n}
                    </span>
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
