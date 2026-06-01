/**
 * Client-side analytics helpers for newsletter conversion instrumentation (TRZ-654).
 *
 * Responsibilities:
 *  - Capture UTM parameters on landing and persist first-touch attribution for the
 *    session, so a signup that happens after internal navigation is still attributed
 *    to the surface that drove the visit.
 *  - Read the HubSpot tracking cookie (`hubspotutk`) so form submissions can be tied
 *    to HubSpot's native analytics session (which already captures UTMs via the
 *    site-wide tracking script loaded in the root layout).
 *  - Thin wrapper over `sendGAEvent` from `@next/third-parties/google` for GA4 events.
 *
 * UTM taxonomy is documented in docs/newsletter/conversion-instrumentation-2026-06-01.md.
 */

import { sendGAEvent } from "@next/third-parties/google";

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "rz_utm_first_touch";

/**
 * Read UTM params from the current URL.
 */
function readUtmsFromUrl(): UtmParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utms: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utms[key] = value;
  }
  return utms;
}

/**
 * Capture UTMs on landing. Persists the *first* UTM-bearing visit of the session
 * (first-touch attribution) so later same-session navigation doesn't overwrite it.
 * Returns the UTMs now in effect for the session.
 */
export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const stored = getStoredUtms();
  if (Object.keys(stored).length > 0) return stored;

  const fromUrl = readUtmsFromUrl();
  if (Object.keys(fromUrl).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      // sessionStorage unavailable (private mode / blocked) — non-fatal.
    }
    return fromUrl;
  }

  return {};
}

/**
 * Read the first-touch UTMs persisted for this session.
 */
export function getStoredUtms(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as UtmParams;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/**
 * Read the HubSpot user token cookie set by the site-wide tracking script.
 * Passing this as `hutk` in a form submission lets HubSpot attribute the
 * submission to the tracked session (and its captured UTM / source data).
 */
export function getHubspotCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Fire a GA4 custom event via the dataLayer. No-ops safely if GA hasn't loaded.
 */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {},
): void {
  try {
    sendGAEvent("event", name, params);
  } catch {
    // GA not initialized (e.g. blocked) — non-fatal.
  }
}
