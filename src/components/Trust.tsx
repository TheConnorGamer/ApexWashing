"use client";

import Counter from "./Counter";
import Reveal from "./Reveal";
import { SITE, STATS } from "@/lib/content";

export default function Trust() {
  return (
    <section className="relative border-y border-bone/10 bg-charcoal-soft">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md font-display text-2xl font-light leading-snug text-cream md:text-3xl">
              Locally owned &amp; operated in {SITE.location} since {SITE.est}.
              Run by {SITE.owners}.
            </p>
            <div className="flex items-center gap-3 text-bone/70">
              <span className="text-gold-soft">★★★★★</span>
              <span className="text-sm font-light">100% satisfaction rate</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-bone/10 bg-bone/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between gap-6 bg-charcoal-soft p-7 md:p-9">
                <span className="font-display text-5xl font-light tracking-tight text-cream md:text-6xl">
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={"decimals" in s ? (s.decimals as number) : 0}
                  />
                </span>
                <span className="text-sm font-light tracking-wide text-bone/60">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
