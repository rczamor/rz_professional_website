"use client";

import { useEffect, useState } from "react";

interface CNNTickerProps {
  headlines: string[];
  badge?: string;
}

export default function CNNTicker({ headlines, badge = "BREAKING" }: CNNTickerProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      setTime(`LIVE ${h}:${m} ET`);
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const text = headlines.join("  •  ") + "  •  ";

  return (
    <div className="think-ticker">
      <div className="think-ticker-badge">
        <span className="think-ticker-live" />
        {badge}
      </div>
      <div className="think-ticker-scroll">
        <div className="think-ticker-scroll-inner">{text}</div>
      </div>
      <div className="think-ticker-time">{time}</div>
    </div>
  );
}
