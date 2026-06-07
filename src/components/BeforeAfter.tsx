"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Variant = "default" | "window" | "garden";

type BeforeAfterProps = {
  src: string;
  alt: string;
  variant?: Variant;
};

const GRIME_CLASS: Record<Variant, string> = {
  default: "grime",
  window: "grime-window",
  garden: "grime-garden",
};

const OVERLAY_CLASS: Record<Variant, string> = {
  default: "bg-ink/15",
  window: "bg-gradient-to-br from-stone/50 via-ink/25 to-stone/40",
  garden: "bg-gradient-to-t from-ink/60 via-ink/35 to-ink/50",
};

export default function BeforeAfter({
  src,
  alt,
  variant = "default",
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const [failed, setFailed] = useState(false);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  if (failed) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center bg-graphite text-sm font-light text-bone/50">
        Image unavailable
      </div>
    );
  }

  const imgClass = "absolute inset-0 h-full w-full object-cover";

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden bg-ink"
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
      role="slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${alt} before and after comparison`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
      }}
    >
      {/* AFTER — clean */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        draggable={false}
        onError={() => setFailed(true)}
        className={imgClass}
      />
      <span className="absolute right-5 bottom-5 z-20 eyebrow rounded-full border border-cream/25 bg-ink/30 px-3 py-1.5 text-cream/90 backdrop-blur-sm">
        After
      </span>

      {/* BEFORE — grime / overgrown treatment */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          draggable={false}
          onError={() => setFailed(true)}
          className={`${imgClass} ${GRIME_CLASS[variant]}`}
        />
        <div className={`absolute inset-0 ${OVERLAY_CLASS[variant]}`} />
        {variant === "garden" && (
          <div
            className="pointer-events-none absolute inset-0 opacity-70 mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, transparent, transparent 18px, rgba(40,30,10,0.18) 18px, rgba(40,30,10,0.18) 20px)",
            }}
          />
        )}
        <span
          className="absolute bottom-5 z-20 eyebrow rounded-full border border-cream/20 bg-ink/40 px-3 py-1.5 text-stone backdrop-blur-sm"
          style={{ left: "1.25rem" }}
        >
          Before
        </span>
      </div>

      <div
        className="absolute top-0 bottom-0 z-10 w-px bg-gold-soft/90"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-soft/70 bg-charcoal/70 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold-soft">
            <path d="M9 6L4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
