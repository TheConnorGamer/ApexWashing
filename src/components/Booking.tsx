"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { SERVICE_OPTIONS, SITE } from "@/lib/content";

const TIME_SLOTS = ["Morning (8–11am)", "Midday (11am–2pm)", "Afternoon (2–5pm)"];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [slot, setSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)].slice(0, 6));
  };

  const removeFile = (idx: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    if (slot) data.set("slot", slot);
    files.forEach((f) => data.append("photos", f));

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed.");
      setSubmitted(true);
      form.reset();
      setFiles([]);
      setSlot(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full border-b border-bone/20 bg-transparent py-3 text-cream placeholder:text-bone/35 transition-colors duration-300 focus:border-gold-soft focus:outline-none disabled:opacity-50";
  const labelClass = "eyebrow mb-3 block text-bone/50";

  return (
    <section id="booking" className="relative bg-charcoal-soft py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold-soft/70" />
              <span className="eyebrow text-gold-soft">Request an Estimate</span>
            </div>
            <h2 className="mt-7 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-cream text-balance md:text-5xl">
              Reserve your appointment.
            </h2>
            <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-bone/70">
              Tell us about your property and share a few photos. We&rsquo;ll
              respond within one business day with a transparent, fixed quote —
              and hold your preferred slot while you decide.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "No-obligation, fixed-price estimate",
                "Response within one business day",
                "Fully insured & guaranteed work",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-bone/75">
                  <span className="text-gold-soft">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative border border-bone/10 bg-charcoal p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-soft/50">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold-soft">
                      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-light text-cream">
                    Request received.
                  </h3>
                  <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-bone/70">
                    Thank you. {SITE.owners} will reach out shortly to confirm
                    your estimate and appointment window.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFiles([]);
                      setSlot(null);
                      setError(null);
                    }}
                    className="mt-8 eyebrow text-gold-soft hover:text-gold-soft/80"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-9"
                >
                  <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">Full name</label>
                      <input id="name" name="name" required disabled={loading} placeholder="Jane Doe" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" required disabled={loading} placeholder={SITE.phone} className={fieldClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required disabled={loading} placeholder="jane@email.com" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="address">Property address</label>
                      <input id="address" name="address" disabled={loading} placeholder="123 Hillcrest Ave" className={fieldClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="service">Service required</label>
                    <div className="relative">
                      <select id="service" name="service" required disabled={loading} defaultValue="" className={`${fieldClass} appearance-none pr-8`}>
                        <option value="" disabled className="bg-charcoal">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-charcoal text-cream">{s}</option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gold-soft" width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="date">Preferred date</label>
                      <input id="date" name="date" type="date" disabled={loading} className={`${fieldClass} [color-scheme:dark]`} />
                    </div>
                    <div>
                      <label className={labelClass}>Preferred window</label>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {TIME_SLOTS.map((s) => (
                          <button
                            type="button"
                            key={s}
                            disabled={loading}
                            onClick={() => setSlot(s)}
                            className={`border px-3 py-2 text-xs font-light tracking-wide transition-all duration-300 disabled:opacity-50 ${
                              slot === s
                                ? "border-gold-soft bg-gold-soft/10 text-cream"
                                : "border-bone/20 text-bone/60 hover:border-bone/50"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Upload photos (optional)</label>
                    <div
                      onClick={() => !loading && inputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        if (!loading) onFiles(e.dataTransfer.files);
                      }}
                      className="group flex cursor-pointer flex-col items-center justify-center border border-dashed border-bone/25 py-10 text-center transition-colors duration-300 hover:border-gold-soft/60"
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-bone/40 transition-colors group-hover:text-gold-soft">
                        <path d="M12 16V4m0 0L7 9m5-5l5 5M5 20h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-3 text-sm font-light text-bone/55">
                        Drag photos here, or <span className="text-gold-soft">browse</span>
                      </p>
                      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
                    </div>

                    {files.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {files.map((f, idx) => (
                          <div key={idx} className="group relative h-16 w-16 overflow-hidden border border-bone/15">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={URL.createObjectURL(f)} alt={f.name} className="h-full w-full object-cover" />
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="absolute inset-0 flex items-center justify-center bg-ink/70 opacity-0 transition-opacity group-hover:opacity-100"
                              aria-label="Remove photo"
                            >
                              <span className="text-lg text-cream">×</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="notes">Anything else?</label>
                    <textarea id="notes" name="notes" rows={3} disabled={loading} placeholder="Tell us about the property and what you'd like cleaned…" className={`${fieldClass} resize-none`} />
                  </div>

                  {error && (
                    <p className="text-sm font-light text-red-400/90">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full items-center justify-center gap-3 bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-all duration-500 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {loading ? "Sending…" : "Reserve My Estimate"}
                    {!loading && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
