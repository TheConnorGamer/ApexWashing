"use client";

import { useEffect, useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export default function SafeImage({
  src,
  alt,
  className,
  loading = "lazy",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src]);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-graphite text-xs font-light text-bone/40 ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        Photo unavailable
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
