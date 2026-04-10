"use client";

import dynamic from "next/dynamic";

const JourneyMap = dynamic(() => import("@/components/about/JourneyMap"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 400 }} />,
});

export default function JourneyMapWrapper() {
  return <JourneyMap />;
}
