"use client";

import BeforeAfter from "./BeforeAfter";
import Reveal from "./Reveal";
import { RESULTS } from "@/lib/content";

export default function Results() {
  return (
    <section id="results" className="relative bg-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-gold-soft/70" />
            <span className="eyebrow text-gold-soft">Before &amp; After</span>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-6xl">
              See the difference.
              <br />
              <span className="italic text-bone/60">Drag to reveal.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base font-light leading-relaxed text-bone/75 lg:ml-auto">
              Real results from real Winnipeg properties. From streak-free windows
              to weed-free garden beds — this is what clean and green looks like.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {RESULTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <figure className="group">
                <BeforeAfter
                  after={c.after}
                  before={c.before}
                  alt={c.alt}
                  variant={c.variant}
                />
                <figcaption className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-xl font-light text-cream">{c.title}</h3>
                    <p className="mt-1 text-sm font-light text-bone/55">{c.note}</p>
                  </div>
                  <span className="eyebrow shrink-0 pt-1 text-bone/45">{c.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-bone/10 pt-10">
            <p className="mx-auto max-w-3xl text-center font-display text-2xl font-light leading-snug text-cream/90 text-balance md:text-3xl">
              A well-kept property makes a{" "}
              <span className="text-gold-soft">great first impression</span> —
              and it&rsquo;s something you&rsquo;ll notice every single day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
