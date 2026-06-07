"use client";

import { SITE } from "@/lib/content";

export default function MobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-bone/10 bg-charcoal/95 p-3 backdrop-blur-lg sm:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex flex-1 items-center justify-center border border-bone/25 py-3 text-sm font-medium text-cream transition-colors hover:border-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
        >
          Call {SITE.phone}
        </a>
        <a
          href="#booking"
          className="flex flex-1 items-center justify-center bg-gold-soft py-3 text-sm font-medium text-ink transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
