import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-3xl tracking-tight text-cream">Clean</span>
              <span className="font-display text-3xl text-sky">&amp;</span>
              <span className="font-display text-3xl tracking-tight text-gold-soft">Green</span>
            </div>
            <p className="mt-2 eyebrow text-bone/50">Services</p>
            <p className="mt-6 text-sm font-light leading-relaxed text-bone/55">
              {SITE.tagline}. Locally owned and operated in Winnipeg since{" "}
              {SITE.est} by {SITE.owners}. Window cleaning and lawn care you can
              count on.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="eyebrow mb-4 text-bone/40">Contact</p>
              <a href={`tel:${SITE.phoneTel}`} className="block text-sm font-light text-bone/80 transition-colors hover:text-cream">
                {SITE.phone}
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm font-light text-bone/80 transition-colors hover:text-cream">
                {SITE.instagramHandle}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-4 text-bone/40">Service Area</p>
              <p className="text-sm font-light text-bone/80">{SITE.location}</p>
              <p className="mt-2 text-sm font-light text-bone/80">Message anytime to book</p>
            </div>
            <div>
              <p className="eyebrow mb-4 text-bone/40">Follow</p>
              <div className="flex gap-5 text-sm font-light text-bone/80">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-soft">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs font-light tracking-wide text-bone/40 sm:flex-row sm:items-center">
          <p>© 2026 {SITE.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Locally owned &amp; operated
            <span className="text-gold-soft/60">·</span>
            100% satisfaction rate
          </p>
        </div>
      </div>
    </footer>
  );
}
