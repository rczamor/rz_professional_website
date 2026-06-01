"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  captureUtmParams,
  getStoredUtms,
  getHubspotCookie,
  trackEvent,
} from "@/lib/analytics";

const HUBSPOT_PORTAL_ID = "245808914";
const HUBSPOT_FORM_GUID = "2530a9e8-5fad-4e04-a99f-36f0b152d43e";

type Props = {
  buttonText?: string;
  className?: string;
};

export default function NewsletterSignup({ buttonText = "Subscribe", className = "hero-newsletter" }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const viewedRef = useRef(false);

  // Persist first-touch UTM attribution for the session as soon as the form mounts.
  useEffect(() => {
    captureUtmParams();
  }, []);

  // Fire `newsletter_form_view` once, when the form scrolls into the viewport.
  useEffect(() => {
    const el = formRef.current;
    if (!el || viewedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !viewedRef.current) {
            viewedRef.current = true;
            trackEvent("newsletter_form_view", {
              placement: className,
              page_path: pathname,
              ...getStoredUtms(),
            });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [className, pathname]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");

    const utms = getStoredUtms();
    const hutk = getHubspotCookie();

    const emailField = { name: "email", value: email.trim() };
    const utmFields = Object.entries(utms).map(([name, value]) => ({ name, value }));

    const context: Record<string, string> = {
      pageUri: `https://richezamor.com${pathname}`,
      pageName: document.title,
    };
    // hutk ties the submission to HubSpot's tracked session, which captures UTMs
    // natively via the site-wide tracking script. This is the reliable attribution path.
    if (hutk) context.hutk = hutk;

    const submit = (fields: { name: string; value: string }[]) =>
      fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields, context }),
        },
      );

    try {
      // Attempt to send UTMs as explicit hidden fields. If the form doesn't define
      // those fields yet, HubSpot rejects the whole submission — so fall back to
      // email-only (hutk still carries native UTM attribution) to never fail a signup.
      let res = await submit([emailField, ...utmFields]);
      if (!res.ok && utmFields.length > 0) {
        res = await submit([emailField]);
      }

      if (res.ok) {
        trackEvent("newsletter_form_submit", {
          placement: className,
          page_path: pathname,
          ...utms,
        });
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
      <div className={className} aria-live="polite">
        <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 500 }}>
          You&apos;re on the list. I&apos;ll be in touch when it launches.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={className}
      onSubmit={handleSubmit}
      toolname="subscribe_newsletter"
      tooldescription="Subscribe to The Context Layer newsletter"
    >
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        toolparamtitle="Email"
      />
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "..." : buttonText}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "error" && (
          <p style={{ color: "#ff6b6b", fontSize: 12, width: "100%" }}>
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </form>
  );
}
