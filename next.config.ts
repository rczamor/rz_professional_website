import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const cspDirectives = [
  "default-src 'self'",
  // 'unsafe-inline' is required for Next.js inline JSON-LD <script> blocks and runtime style hydration.
  // GA + HubSpot tracking + GSAP CDN are loaded externally via <Script>.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.hs-scripts.com https://*.hs-analytics.net https://*.hubspot.com https://*.hsforms.com https://*.hsforms.net https://*.hubapi.com https://*.usemessages.com https://*.hs-banner.com https://cdn.jsdelivr.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.hsforms.com https://*.hsforms.net https://*.hubapi.com https://*.hubspot.com https://*.hs-analytics.net https://*.hs-banner.com",
  "frame-src 'self' https://*.hubspot.com https://*.hsforms.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.hsforms.com",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspDirectives },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
