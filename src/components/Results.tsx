"use client";

import BeforeAfter from "./BeforeAfter";
import Reveal from "./Reveal";
import { img, PHOTOS } from "@/lib/content";

const CASES = [
  {
    src: img(PHOTOS.driveway, 1400),
    alt: "Driveway restoration",
    title: "Heritage Stone Driveway",
    location: "Bel Terra Heights",
    note: "Years of organic staining lifted in a single afternoon.",
  },
  {
    src: img(PHOTOS.modernHome, 1400),
    alt: "House soft wash",
    title: "Contemporary Render Facade",
    location: "Northridge",
    note: "Soft-wash treatment, zero pressure damage.",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative bg-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-gold-soft/70" />
            <span className="eyebrow text-gold-soft">The Difference</span>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-6xl">
              See it for yourself.
              <br />
              <span className="italic text-bone/60">Drag to reveal.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base font-light leading-relaxed text-bone/75 lg:ml-auto">
              These are real surfaces — not renders. A professionally cleaned
              exterior can add measurable curb appeal and protect your
              property&rsquo;s value for years to come.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <figure className="group">
                <BeforeAfter src={c.src} alt={c.alt} />
                <figcaption className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-xl font-light text-cream">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm font-light text-bone/55">
                      {c.note}
                    </p>
                  </div>
                  <span className="eyebrow shrink-0 pt-1 text-bone/45">
                    {c.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-bone/10 pt-10">
            <p className="mx-auto max-w-3xl text-center font-display text-2xl font-light leading-snug text-cream/90 text-balance md:text-3xl">
              Homeowners consistently report a{" "}
              <span className="text-gold-soft">5–10% lift</span> in perceived
              property value after a full exterior restoration.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
