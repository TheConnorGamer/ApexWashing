"use client";

import Reveal from "./Reveal";
import { img, PROJECTS } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-charcoal-soft py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold-soft/70" />
                <span className="eyebrow text-gold-soft">Featured Projects</span>
              </div>
              <h2 className="mt-7 max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-6xl">
                A portfolio measured in transformations.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#booking"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-light tracking-wide text-cream"
            >
              Start your project
              <span className="h-px w-8 bg-gold-soft transition-all duration-500 group-hover:w-14" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(p.photo, 1200)}
                    alt={`${p.title} — ${p.service}`}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/15" />
                  <span className="absolute left-6 top-6 eyebrow rounded-full border border-cream/25 bg-ink/40 px-3 py-1.5 text-cream/90 backdrop-blur-sm">
                    {p.location}
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-6 border-t border-bone/10 pt-6">
                  <div>
                    <h3 className="font-display text-2xl font-light text-cream md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-light tracking-wide text-gold-soft/80">
                      {p.service}
                    </p>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-bone/65">
                  {p.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
