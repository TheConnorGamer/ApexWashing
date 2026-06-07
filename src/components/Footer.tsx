export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl tracking-tight text-cream">
                Apex
              </span>
              <span className="eyebrow text-gold-soft/80">Exterior Co.</span>
            </div>
            <p className="mt-6 text-sm font-light leading-relaxed text-bone/55">
              Concierge-level exterior cleaning for the city&rsquo;s finest
              properties. Owner-operated, fully insured, and obsessed with
              visible results.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="eyebrow mb-4 text-bone/40">Contact</p>
              <a href="tel:+15550000000" className="block text-sm font-light text-bone/80 transition-colors hover:text-cream">
                (555) 000-0000
              </a>
              <a href="mailto:hello@apexexterior.co" className="mt-2 block text-sm font-light text-bone/80 transition-colors hover:text-cream">
                hello@apexexterior.co
              </a>
            </div>
            <div>
              <p className="eyebrow mb-4 text-bone/40">Service Area</p>
              <p className="text-sm font-light text-bone/80">Greater Metro Region</p>
              <p className="mt-2 text-sm font-light text-bone/80">Mon–Sat · 7am–6pm</p>
            </div>
            <div>
              <p className="eyebrow mb-4 text-bone/40">Follow</p>
              <div className="flex gap-5 text-sm font-light text-bone/80">
                <a href="#" className="transition-colors hover:text-gold-soft">Instagram</a>
                <a href="#" className="transition-colors hover:text-gold-soft">Google</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs font-light tracking-wide text-bone/40 sm:flex-row sm:items-center">
          <p>© 2026 Apex Exterior Co. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Fully insured &amp; bonded
            <span className="text-gold-soft/60">·</span>
            Licensed exterior cleaning specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
