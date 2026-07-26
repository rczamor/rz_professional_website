import { ImageResponse } from "next/og";

/**
 * Shared renderer for every generated Open Graph card on the site.
 *
 * Mirrors the hand-authored cards in `public/og/*.svg` — near-black canvas,
 * accent gradient rule along the top, node-graph motif on the right, and a
 * footer stamped with the page's own URL. Keeping one renderer means new
 * articles get an on-brand card for free instead of falling back to the
 * sitewide `og-image.png`.
 *
 * No custom fonts are loaded: `ImageResponse` ships a usable default, and
 * pulling webfonts at build time would add a network dependency to every
 * static render for a card that is read at a glance.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BG = "#050508";
const ACCENT = "#7B7FE4";
const ACCENT_ALT = "#7c5cfc";
const TEXT = "#f0f0f5";

/**
 * Satori has no text-overflow support, so long strings are trimmed by hand.
 * Cuts on a word boundary — a mid-word truncation ("still s…") reads as a bug
 * on a card whose whole job is looking deliberate.
 */
function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.—-]+$/, "")}…`;
}

interface OgCardOptions {
  /** Small uppercase line above the title — pillar, badge, or section. */
  eyebrow: string;
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
  /** Path shown in the footer, e.g. `/thinking/what-is-a-context-layer`. */
  path: string;
}

/** The node-graph motif that anchors the right side of every card. */
function NodeGraph() {
  const cx = 1010;
  const cy = 315;
  const nodes = [
    { x: 900, y: 208 },
    { x: 1122, y: 238 },
    { x: 1088, y: 432 },
    { x: 912, y: 402 },
  ];

  return (
    // Spans the full canvas so the motif's absolute coordinates land where the
    // hand-authored cards put them; a cropped viewBox clipped it mid-circle.
    <svg
      width={OG_SIZE.width}
      height={OG_SIZE.height}
      viewBox={`0 0 ${OG_SIZE.width} ${OG_SIZE.height}`}
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <circle cx={cx} cy={cy} r="150" fill="none" stroke={ACCENT} opacity="0.12" />
      <circle cx={cx} cy={cy} r="96" fill="none" stroke={ACCENT_ALT} opacity="0.1" />
      {nodes.map((n) => (
        <line
          key={`${n.x}-${n.y}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke={ACCENT_ALT}
          strokeWidth="1"
          opacity="0.4"
        />
      ))}
      <circle cx={cx} cy={cy} r="7" fill={ACCENT} />
      {nodes.map((n) => (
        <circle key={`dot-${n.x}-${n.y}`} cx={n.x} cy={n.y} r="5" fill={ACCENT} />
      ))}
    </svg>
  );
}

export function renderOgCard({ eyebrow, title, subtitle, path }: OgCardOptions) {
  // Long titles need to step down a size or they overrun the canvas.
  const trimmedTitle = clamp(title, 96);
  const titleSize = trimmedTitle.length > 62 ? 54 : trimmedTitle.length > 40 ? 64 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          background: BG,
          padding: "0 90px",
        }}
      >
        {/* Accent rule along the top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 5,
            display: "flex",
            background: `linear-gradient(90deg, ${ACCENT} 0%, ${ACCENT_ALT} 100%)`,
          }}
        />

        <NodeGraph />

        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 4,
            color: ACCENT,
            textTransform: "uppercase",
          }}
        >
          {clamp(eyebrow, 48)}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 820,
            fontSize: titleSize,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.1,
            color: TEXT,
          }}
        >
          {trimmedTitle}
        </div>

        {subtitle ? (
          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 780,
              fontSize: 25,
              lineHeight: 1.4,
              color: "rgba(240,240,245,0.62)",
            }}
          >
            {clamp(subtitle, 150)}
          </div>
        ) : null}

        <div
          style={{
            position: "absolute",
            left: 90,
            bottom: 62,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              display: "flex",
              background: ACCENT,
            }}
          />
          <div
            style={{
              marginLeft: 15,
              fontSize: 18,
              letterSpacing: 1,
              color: "rgba(240,240,245,0.4)",
            }}
          >
            {`richezamor.com${path === "/" ? "" : path}`}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
