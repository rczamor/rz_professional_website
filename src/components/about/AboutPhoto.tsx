"use client";

import { useState } from "react";

export default function AboutPhoto({
  src,
  alt,
  aspect,
  label,
  objectPosition,
}: {
  src: string;
  alt: string;
  aspect: string;
  label?: string;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="about-photo-placeholder" style={{ aspectRatio: aspect }}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-tertiary)"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span>{label || alt}</span>
      </div>
    );
  }

  return (
    <div className="about-photo-frame" style={{ aspectRatio: aspect }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="about-photo"
        style={{ aspectRatio: aspect, objectPosition: objectPosition || "center" }}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  );
}
