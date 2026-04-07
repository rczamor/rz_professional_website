"use client";

import { FormEvent, useState } from "react";

const HUBSPOT_PORTAL_ID = "245808914";
const HUBSPOT_FORM_GUID = "2530a9e8-5fad-4e04-a99f-36f0b152d43e";

type Props = {
  buttonText?: string;
  className?: string;
};

export default function NewsletterSignup({ buttonText = "Subscribe", className = "hero-newsletter" }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");

    const payload = {
      fields: [
        { name: "email", value: email.trim() },
      ],
      context: {
        pageUri: "https://richezamor.com/thinking",
        pageName: "Thinking in Public — Riché Zamor",
      },
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        console.error("HubSpot newsletter error:", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error("Newsletter signup failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 500 }}>
          You&apos;re on the list. I&apos;ll be in touch when it launches.
        </p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "..." : buttonText}
      </button>
      {status === "error" && (
        <p style={{ color: "#ff6b6b", fontSize: 12, width: "100%" }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
