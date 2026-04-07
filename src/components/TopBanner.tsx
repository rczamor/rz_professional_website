"use client";

import { useState } from "react";
import NewsletterSignup from "@/components/NewsletterSignup";
import "@/styles/top-banner.css";

export default function TopBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="top-banner">
      <div className="top-banner-inner">
        <span className="top-banner-text">
          <strong>The Context Layer</strong> — a newsletter on AI memory, context synthesis, and building products that think.
        </span>
        <NewsletterSignup buttonText="Join the Waitlist" className="top-banner-form" />
        <button
          className="top-banner-close"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
