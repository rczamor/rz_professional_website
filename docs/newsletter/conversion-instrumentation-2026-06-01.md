# Newsletter Conversion Instrumentation
**Linear:** TRZ-654 · **Landed:** 2026-06-01

Canonical reference for how newsletter ("The Context Layer") signups are measured:
UTM taxonomy, the destination-URL placement table, GA4 events, and HubSpot capture.

## TL;DR

The signup form is a single top-of-page surface (no funnel). What we measure:

1. **CTA copy variants** — which post wording drives clicks (`utm_content`).
2. **Source attribution** — which surface drives signups (`utm_source` / `utm_medium`).
3. **Click-to-signup conversion** — `newsletter_form_view` → `newsletter_form_submit` in GA4.

The form is a custom React component ([`NewsletterSignup.tsx`](../../src/components/NewsletterSignup.tsx))
that posts to the HubSpot Forms submission API — **not** a HubSpot embed. It is rendered
site-wide in the [`TopBanner`](../../src/components/TopBanner.tsx) and again in the
`/thinking` page newsletter section.

---

## 1. UTM scheme (canonical)

Apply to every link that points **to richezamor.com** from an external newsletter promotion.

| Parameter | Allowed values |
| --- | --- |
| `utm_source` | `linkedin` \| `x` \| `richezamor.com` \| `email` \| `podcast` \| `press` |
| `utm_medium` | `post-comment` \| `first-comment` \| `featured` \| `headline` \| `bio` \| `post-body` \| `profile-link` \| `site-cta` |
| `utm_campaign` | `newsletter` (always, for newsletter destinations) |
| `utm_content` | identifier per placement instance — post slug, date (`YYYYMMDD`), or surface label |

**Rules**
- `utm_campaign=newsletter` is mandatory on every newsletter destination link.
- `utm_content` must uniquely identify the placement instance so copy variants are comparable.
- Lower-case, no spaces. Use the date form `20260507` for dated post placements.

---

## 2. Destination-URL placement table

The on-site form is inline (it submits in place — there is **no internal newsletter
redirect link to tag**). UTMs therefore arrive from **inbound external links**. Use these
canonical tagged URLs when configuring each placement (TRZ-651 / TRZ-652 / TRZ-653).

| # | Surface | Tagged URL |
| --- | --- | --- |
| 1 | LinkedIn first-comment auto-CTA (per post) | `https://www.richezamor.com/?utm_source=linkedin&utm_medium=first-comment&utm_campaign=newsletter&utm_content=<YYYYMMDD>` |
| 2 | LinkedIn Featured card | `https://www.richezamor.com/?utm_source=linkedin&utm_medium=featured&utm_campaign=newsletter&utm_content=profile-card` |
| 3 | LinkedIn headline link | `https://www.richezamor.com/?utm_source=linkedin&utm_medium=headline&utm_campaign=newsletter&utm_content=profile` |
| 4 | LinkedIn About-section link | `https://www.richezamor.com/?utm_source=linkedin&utm_medium=profile-link&utm_campaign=newsletter&utm_content=about` |
| 5 | X bio link | `https://www.richezamor.com/?utm_source=x&utm_medium=bio&utm_campaign=newsletter&utm_content=profile` |
| 6 | Podcast show notes | `https://www.richezamor.com/?utm_source=podcast&utm_medium=post-body&utm_campaign=newsletter&utm_content=<show-slug>` |
| 7 | Press / earned mention | `https://www.richezamor.com/?utm_source=press&utm_medium=post-body&utm_campaign=newsletter&utm_content=<outlet-slug>` |

**On-site surfaces (no UTM — inline forms, captured by placement label in GA4):**

| Surface | Component / class | GA4 `placement` |
| --- | --- | --- |
| Site-wide top banner | `TopBanner` → `top-banner-form` | `top-banner-form` |
| `/thinking` newsletter section | `thinking/page.tsx` → `cta-newsletter` | `cta-newsletter` |

> If a future internal CTA *button* is added that navigates to a dedicated newsletter
> surface, tag it `utm_source=richezamor.com&utm_medium=site-cta&utm_campaign=newsletter&utm_content=<surface>`.

---

## 3. GA4 events

GA4 is loaded via `@next/third-parties` in [`layout.tsx`](../../src/app/layout.tsx)
(`gaId=G-7G0V8D1W2M`). Events fire through `sendGAEvent` (wrapped by
[`trackEvent`](../../src/lib/analytics.ts)).

| Event | Trigger | Params |
| --- | --- | --- |
| `newsletter_form_view` | Form scrolls ≥50% into viewport (IntersectionObserver, once per mount) | `placement`, `page_path`, first-touch UTMs |
| `newsletter_form_submit` | HubSpot submission returns OK | `placement`, `page_path`, first-touch UTMs |

UTM dimensions on the page are captured automatically by GA4's default attribution.
The event params above duplicate the session's **first-touch** UTMs (persisted in
`sessionStorage`, see §5) so attribution survives internal navigation before signup.

**Manual GA4 setup (Admin UI — not code):**
- [ ] Mark `newsletter_form_view` and `newsletter_form_submit` as custom events / key events.
- [ ] Register custom dimensions for `placement` (and UTM params if event-scoped reporting is wanted).
- [ ] Verify both events in **GA4 → DebugView** (load the site with `?utm_source=...&debug_mode=1`).
- [ ] Build a funnel exploration: `session source/medium` → `newsletter_form_view` → `newsletter_form_submit`.

---

## 4. HubSpot UTM capture

Portal `245808914`, form `2530a9e8-5fad-4e04-a99f-36f0b152d43e`. The HubSpot tracking
script (`js-na2.hs-scripts.com/245808914.js`) is loaded site-wide in `layout.tsx` and
captures UTMs into the visitor's analytics cookie.

The form submission ([`NewsletterSignup.tsx`](../../src/components/NewsletterSignup.tsx)):
1. Sends `hutk` (the `hubspotutk` cookie) in the submission `context` → HubSpot ties the
   submission to the tracked session and populates Original/Latest Source + UTM analytics
   properties natively. **This is the reliable attribution path** and needs no form config.
2. Also sends `utm_source` / `utm_medium` / `utm_campaign` / `utm_content` as explicit
   fields. If those hidden fields aren't defined on the form, HubSpot rejects the payload,
   so the code **retries email-only** — a signup never fails because of UTM fields.

**To enable explicit hidden-field capture (HubSpot form editor — not code):**
- [ ] Add hidden fields `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` to the form.
- [ ] Submit a test signup with UTMs and confirm the values land on the contact record.
- Until then, attribution still works via `hutk` + HubSpot's native source tracking.

---

## 5. First-touch attribution

[`captureUtmParams()`](../../src/lib/analytics.ts) runs when the form mounts. The first
UTM-bearing visit of a session is stored in `sessionStorage` (`rz_utm_first_touch`) and is
**not** overwritten by later navigation — so a visitor who lands from a tagged LinkedIn
link, browses, then signs up is still attributed to LinkedIn.

---

## 6. Reporting cadence

- **Read:** signups by `source/medium` for the trailing 7 days (GA4 exploration + HubSpot
  contact source breakdown).
- **When:** weekly, Sunday, during the audit cycle.
- **First read:** 2026-05-15 (one week after instrumentation; adjust to the first Sunday
  after this lands).

## Acceptance status

- [x] UTM scheme documented in corpus (this file)
- [x] Destination-URL placement table documented (§2)
- [x] GA4 events live in code (`newsletter_form_view`, `newsletter_form_submit`)
- [x] HubSpot UTM capture wired (`hutk` + guarded explicit fields)
- [ ] GA4 events verified in DebugView *(manual, GA4 UI)*
- [ ] GA4 funnel exploration built *(manual, GA4 UI)*
- [ ] HubSpot hidden fields added + test submit verified *(manual, HubSpot UI)*
- [ ] First weekly attribution read pulled *(manual, scheduled)*
