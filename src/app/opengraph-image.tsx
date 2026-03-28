import { ImageResponse } from "next/og";
import { metaContent } from "@/content/meta";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          color: "#00e0c0",
          fontSize: 16,
          letterSpacing: "0.2em",
          marginBottom: 24,
        }}
      >
        {metaContent.ogBrand}
      </div>
      <div
        style={{
          color: "#f0f0f0",
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 800,
        }}
      >
        {metaContent.ogTagline}
      </div>
      <div
        style={{
          color: "#999999",
          fontSize: 20,
          marginTop: 32,
        }}
      >
        {metaContent.ogSubtitle}
      </div>
    </div>
  );
}
