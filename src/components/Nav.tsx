"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#why" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-bone/10 bg-charcoal/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight text-cream md:text-2xl">
              Apex
            </span>
            <span className="eyebrow text-gold-soft/80 transition-colors group-hover:text-gold-soft">
              Exterior Co.
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-light tracking-wide text-bone/80 transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-soft transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#booking"
              className="hidden items-center gap-2 border border-gold-soft/40 px-5 py-2.5 text-sm tracking-wide text-cream transition-all duration-400 hover:border-gold-soft hover:bg-gold-soft hover:text-ink sm:inline-flex"
            >
              Free Estimate
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center text-cream lg:hidden"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-px w-6 bg-current transition-all duration-300 ${
                    open ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-current transition-all duration-300 ${
                    open ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-charcoal px-8 lg:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="font-display text-4xl font-light text-cream/90"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + LINKS.length * 0.06 }}
              className="mt-6 inline-flex w-fit items-center gap-2 bg-gold-soft px-6 py-3 text-sm tracking-wide text-ink"
            >
              Get Your Free Estimate
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
