"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Testimonial {
  company: string;
  metricValue: string;
  metricLabel: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
}

const SLIDES: Testimonial[] = [
  {
    company: "Suzy",
    metricValue: "6 wks",
    metricLabel: "concept \u2192 launch",
    quote:
      'Rich\u00e9 took our nine-year-old survey platform and <em>completely reimagined what it could be.</em> In six weeks, he architected and shipped the Decision Engine \u2014 a product that synthesizes intelligence across every tool our clients use. He doesn\u2019t just build features. He transforms how an organization thinks about its own product.',
    initials: "DS",
    name: "[Name \u2014 Placeholder]",
    role: "Product Leadership",
  },
  {
    company: "IBM",
    metricValue: "31%",
    metricLabel: "trial conversion lift",
    quote:
      'Rich\u00e9 deployed our growth stack across 30+ countries and <em>drove a 31% lift in trial conversion</em> that translated to millions in revenue. What set him apart was that he didn\u2019t just optimize funnels \u2014 he built personalization systems that understood what each customer needed to see at the moment they needed to decide.',
    initials: "MR",
    name: "[Name \u2014 Placeholder]",
    role: "Cloud & AI Division",
  },
  {
    company: "Techstars",
    metricValue: "300%",
    metricLabel: "growth at $0 CAC",
    quote:
      'Most founders talk about product-market fit. Rich\u00e9 built it. He took Grandstage from zero to <em>90 B2B companies in three months at zero customer acquisition cost.</em> His insight about hierarchical relevance \u2014 ranking information by what actually matters to a decision \u2014 is what lifted retention from 50% to 80%. That\u2019s not optimization. That\u2019s architecture.',
    initials: "AK",
    name: "[Name \u2014 Placeholder]",
    role: "Investor & Advisor",
  },
  {
    company: "Johnson & Johnson",
    metricValue: "500%",
    metricLabel: "engagement revenue",
    quote:
      'Rich\u00e9 overhauled our content platform powering over 1,000 consumer product websites. He <em>cut our time-to-market from months to under four weeks</em> and grew our engagement revenue by over 500%. He doesn\u2019t just deliver \u2014 he identifies the growth opportunities you didn\u2019t know were there and builds the roadmap to capture them.',
    initials: "LP",
    name: "[Name \u2014 Placeholder]",
    role: "Digital Experience",
  },
  {
    company: "Helm Labs",
    metricValue: "$3.25M",
    metricLabel: "pipeline pre-product",
    quote:
      'Before we even had a product in market, Rich\u00e9 had generated <em>$3.25 million in pipeline</em> and closed six-figure pilots. He sold the vision of what our data intelligence platform could be so compellingly that enterprise buyers committed before they could touch it. That\u2019s the rarest skill in product leadership \u2014 the ability to sell what you\u2019re building while you\u2019re building it.',
    initials: "TC",
    name: "[Name \u2014 Placeholder]",
    role: "Executive Leadership",
  },
  {
    company: "Hill Holliday",
    metricValue: "1M+",
    metricLabel: "followers grown",
    quote:
      'Rich\u00e9 transformed our social customer service operation from a liability into a strategic asset. He built programs that grew our Facebook presence to <em>over a million followers</em> and drove a 30% increase in customer perception \u2014 while reducing Cigna\u2019s service SLA from seven days to one. He understands that digital engagement is a product problem, not a marketing problem.',
    initials: "JW",
    name: "[Name \u2014 Placeholder]",
    role: "Digital Strategy",
  },
];

const AUTOPLAY_MS = 7000;
const TICK_MS = 50;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);
  const elapsedRef = useRef(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(0);

  const goTo = useCallback((index: number) => {
    let next = index;
    if (next < 0) next = SLIDES.length - 1;
    if (next >= SLIDES.length) next = 0;
    currentRef.current = next;
    setCurrent(next);
    elapsedRef.current = 0;
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo(currentRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(currentRef.current - 1), [goTo]);

  // Autoplay tick
  useEffect(() => {
    tickRef.current = setInterval(() => {
      if (pausedRef.current) return;
      elapsedRef.current += TICK_MS;
      const pct = Math.min((elapsedRef.current / AUTOPLAY_MS) * 100, 100);
      setProgress(pct);
      if (elapsedRef.current >= AUTOPLAY_MS) {
        goTo(currentRef.current + 1);
      }
    }, TICK_MS);

    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [goTo]);

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") { prev(); }
      if (e.key === "ArrowRight") { next(); }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [prev, next]);

  // Touch / swipe
  const tx0Ref = useRef(0);

  function onTouchStart(e: React.TouchEvent) {
    tx0Ref.current = e.changedTouches[0].screenX;
    pausedRef.current = true;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const dx = tx0Ref.current - e.changedTouches[0].screenX;
    if (Math.abs(dx) > 50) {
      dx > 0 ? next() : prev();
    }
    pausedRef.current = false;
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials">
        <div className="section-label">What People Say</div>
        <h2 className="section-title">Working with Rich&eacute;</h2>

        <div className="carousel">
          <div
            className="carousel-viewport"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="carousel-track">
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className={`carousel-slide${i === current ? " active" : ""}`}
                >
                  <div className="testimonial-card">
                    <div className="card-top">
                      <span className="company-tag">{slide.company}</span>
                      <div className="card-metric">
                        <div className="metric-value">{slide.metricValue}</div>
                        <div className="metric-label">{slide.metricLabel}</div>
                      </div>
                    </div>
                    <p
                      className="quote-body"
                      dangerouslySetInnerHTML={{ __html: slide.quote }}
                    />
                    <div className="card-attribution">
                      <div className="avatar">
                        <span className="initials">{slide.initials}</span>
                      </div>
                      <div>
                        <div className="attr-name">{slide.name}</div>
                        <div className="attr-role">{slide.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <div className="carousel-nav">
              <button
                className="nav-btn"
                onClick={() => { prev(); }}
                aria-label="Previous testimonial"
                type="button"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="nav-btn"
                onClick={() => { next(); }}
                aria-label="Next testimonial"
                type="button"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="carousel-segments">
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  className={`segment${i === current ? " active" : ""}${i < current ? " filled" : ""}`}
                  onClick={() => goTo(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div
                    className="segment-fill"
                    style={
                      i === current
                        ? { width: `${progress}%`, transition: "none" }
                        : i < current
                          ? { width: "100%", transition: "none" }
                          : { width: "0%", transition: "none" }
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
