"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const CITIES = [
  { id: "providence", name: "Providence, RI", coords: [-71.4128, 41.824] as [number, number] },
  { id: "randolph", name: "Randolph, MA", coords: [-71.0437, 42.1626] as [number, number] },
  { id: "boston", name: "Boston, MA", coords: [-71.0589, 42.3601] as [number, number] },
  { id: "dc", name: "Washington, DC", coords: [-77.0369, 38.9072] as [number, number] },
  { id: "arlington", name: "Arlington, VA", coords: [-77.091, 38.8799] as [number, number] },
  { id: "anchorage", name: "Anchorage, AK", coords: [-149.9003, 61.2181] as [number, number] },
  { id: "nyc", name: "New York, NY", coords: [-74.006, 40.7128] as [number, number] },
  { id: "brooklyn", name: "Brooklyn, NY", coords: [-73.9442, 40.6782] as [number, number] },
];

const CONNECTION_ORDER = ["providence", "randolph", "boston", "dc", "arlington", "nyc", "brooklyn"];

interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  metrics?: string;
  cityIds: string[];
}

const TIMELINE: TimelineEntry[] = [
  {
    year: "1981\u20132005",
    title: "Where I Come From",
    company: "Providence, RI \u2192 Randolph, MA",
    description:
      "Born and raised in Providence, Rhode Island. Lived with my mom and older sister \u2014 we moved around a lot. My mom was working on her nursing degree, and I\u2019d go to class with her. She\u2019d hand me her textbooks, so I was reading the Iliad, the Odyssey, and Dante\u2019s Inferno in elementary school. At 12, I decided to move in with my dad in Randolph, MA because I needed to change direction. My dad and stepmom were professors who ran non-profit programs \u2014 I grew up around community leaders and elected officials.",
    cityIds: ["providence", "randolph"],
  },
  {
    year: "2001\u20132005",
    title: "Finding My Stride",
    company: "UMass Boston",
    description:
      "Started as a computer science major, decided I hated calculus and didn\u2019t want to do math forever. Had an interest in media \u2014 thought I\u2019d go into public broadcasting or TV production. But I found my footing as a student leader: ran a student organization, published the first independent student magazine on campus, joined the Chancellor\u2019s Board (a faculty-student committee setting university direction), and was recognized as an emerging leader through a Commonwealth legislative program. I also started two businesses in college \u2014 a nonprofit that taught youth community organizing through the five elements of hip hop, and an e-commerce business selling performance car parts online. Then I was tapped to run a $1M pilot after-school program, beating out tenured teachers and professors with advanced degrees.",
    metrics: "CS major \u2192 2 businesses \u2192 student leader \u2192 ran $1M pilot program",
    cityIds: ["boston"],
  },
  {
    year: "2006\u20132009",
    title: "The Spark",
    company: "Community Organizing \u2192 Political Tech \u2192 Digital Strategy",
    description:
      "Started as a community organizer at Madison Park Development Corporation in Boston, where I performed a community needs assessment in Roxbury that led to the state senate and city council supporting a youth empowerment program. We also ran a farmers market to provide fresh organic food access in what was considered a food desert. A question from Celia Grant changed everything: \u201cHow could we have used technology to better mobilize voters in Roxbury?\u201d I went to DC, attended the first-ever digital organizing training, and built my way in. I was often skip-leveled \u2014 my first two jobs out of college were running a ten-person team for a tech startup part-time while managing political fundraising and a state legislative race. I went on to manage a congressional race as the youngest campaign manager that cycle.",
    metrics: "Youngest campaign manager that cycle \u00b7 community needs assessment \u2192 policy action",
    cityIds: ["boston", "dc"],
  },
  {
    year: "2009\u20132011",
    title: "First Company",
    company: "Social Contxt (Founder)",
    description:
      "Built a tech-enabled services company with an omnichannel martech platform for SMBs. Partially funded by Hootsuite. Five people and six figures in revenue in six months. Not venture-scale, but proof I could build a product business from zero.",
    metrics: "6-figure revenue \u00b7 6 months \u00b7 5 team members",
    cityIds: ["boston"],
  },
  {
    year: "2011\u20132017",
    title: "Enterprise Transformation",
    company: "Hill Holliday \u2192 4Site \u2192 Phase2",
    description:
      "Ran campaigns for Bank of America (1M+ followers, 30% customer perception lift) and Cigna Healthcare. Then pivoted from strategy to product at Phase2 \u2014 launched a 10-person consulting practice and embedded as product lead within J&J, Twitter, Reddit, Memorial Sloan Kettering, and Sony Music.",
    metrics: "$3M practice revenue in year one",
    cityIds: ["nyc", "arlington"],
  },
  {
    year: "2018\u20132021",
    title: "IBM Scale",
    company: "Digital Product & Growth Leader",
    description:
      "Led the Cloud & AI self-service portfolio. 48 reports, $4M budget, global growth stack deployment. Built personalization systems and drove millions in revenue. But even with all of IBM\u2019s resources, the core frustration remained: \u201cIf this is this hard with all the resources IBM has, how hard is this for small businesses?\u201d",
    metrics: "48 reports \u00b7 $4M budget \u00b7 millions in revenue",
    cityIds: ["nyc"],
  },
  {
    year: "2022\u20132024",
    title: "Founder Again",
    company: "Grandstage / Spade AI \u2192 Helm Labs",
    description:
      "Co-founded Grandstage: AI research engine for GTM teams. Raised $525K, went through Techstars and Antler, shipped three products, scaled to 90 B2B companies at $0 CAC. Then SVP & GM at Helm Labs, generating $3.25M pipeline pre-product launch.",
    metrics: "$525K raised \u00b7 Techstars + Antler \u00b7 90 companies \u00b7 $0 CAC",
    cityIds: ["nyc", "brooklyn"],
  },
  {
    year: "2025\u2013Present",
    title: "The Convergence",
    company: "VP Product, Suzy + Building Sia",
    description:
      "Led the transformation from consumer survey platform to Decision Engine \u2014 enterprise product synthesizing fragmented market intelligence for 350+ brands. Also building Sia: a personal knowledge system demonstrating the five-step context architecture I advocate for.",
    metrics: "350+ brands \u00b7 Decision Engine launched April 2026",
    cityIds: ["brooklyn"],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function JourneyMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeEntry, setActiveEntry] = useState(0);

  /* ---- Active city IDs derived from current entry ---- */
  const activeCityIds = TIMELINE[activeEntry]?.cityIds ?? [];

  /* ---- Map label ---- */
  const mapLabel = activeCityIds
    .map((id) => CITIES.find((c) => c.id === id)?.name)
    .filter(Boolean)
    .join(" \u2192 ");

  /* ---- Intersection observers for timeline entries ---- */
  const setEntryRef = useCallback(
    (el: HTMLDivElement | null, idx: number) => {
      entryRefs.current[idx] = el;
    },
    [],
  );

  useEffect(() => {
    const els = entryRefs.current.filter(Boolean) as HTMLDivElement[];
    if (els.length === 0) return;

    /* Visibility observer — fade in */
    const visObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    /* Active observer — highlight on map */
    const activeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = els.indexOf(e.target as HTMLDivElement);
            if (idx !== -1) setActiveEntry(idx);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -40% 0px" },
    );

    els.forEach((el) => {
      visObs.observe(el);
      activeObs.observe(el);
    });

    return () => {
      visObs.disconnect();
      activeObs.disconnect();
    };
  }, []);

  /* ---- D3 map initialisation ---- */
  useEffect(() => {
    if (!mapRef.current) return;

    const width = 380;
    const height = 280;

    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%");

    svgRef.current = svg.node();

    const g = svg.append("g");

    fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
      .then((res) => res.json())
      .then((us) => {
        const states = topojson.feature(us, us.objects.states) as unknown as GeoJSON.FeatureCollection;
        const mesh = topojson.mesh(us, us.objects.states, (a: any, b: any) => a !== b);

        const projection = d3.geoAlbersUsa().fitSize([width, height], states);
        projectionRef.current = projection;
        const path = d3.geoPath().projection(projection);

        /* State fills */
        g.selectAll("path.about-state-path")
          .data(states.features)
          .join("path")
          .attr("class", "about-state-path")
          .attr("d", path as any);

        /* State borders */
        g.append("path")
          .datum(mesh)
          .attr("class", "about-state-path")
          .attr("fill", "none")
          .attr("d", path as any);

        /* Connection lines */
        const lineGen = d3.line<[number, number]>().x((d) => d[0]).y((d) => d[1]);
        const connectionCoords = CONNECTION_ORDER.map((id) => {
          const city = CITIES.find((c) => c.id === id)!;
          return projection(city.coords) as [number, number];
        }).filter(Boolean);

        g.append("path")
          .datum(connectionCoords)
          .attr("class", "about-connection-line")
          .attr("d", lineGen)
          .attr("fill", "none");

        /* City pulse circles (behind dots) */
        g.selectAll("circle.about-city-pulse")
          .data(CITIES)
          .join("circle")
          .attr("class", (d) => `about-city-pulse`)
          .attr("data-city", (d) => d.id)
          .attr("cx", (d) => projection(d.coords)?.[0] ?? 0)
          .attr("cy", (d) => projection(d.coords)?.[1] ?? 0)
          .attr("r", 0);

        /* City dots */
        g.selectAll("circle.about-city-dot")
          .data(CITIES)
          .join("circle")
          .attr("class", "about-city-dot")
          .attr("data-city", (d) => d.id)
          .attr("cx", (d) => projection(d.coords)?.[0] ?? 0)
          .attr("cy", (d) => projection(d.coords)?.[1] ?? 0)
          .attr("r", 2.5);

        /* City labels */
        g.selectAll("text.about-city-label")
          .data(CITIES)
          .join("text")
          .attr("class", "about-city-label")
          .attr("data-city", (d) => d.id)
          .attr("x", (d) => (projection(d.coords)?.[0] ?? 0) + 6)
          .attr("y", (d) => (projection(d.coords)?.[1] ?? 0) + 4)
          .text((d) => d.name);
      });

    return () => {
      svg.remove();
    };
  }, []);

  /* ---- Update active cities when activeEntry changes ---- */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const sel = d3.select(svg);

    /* Dots */
    sel.selectAll<SVGCircleElement, (typeof CITIES)[number]>("circle.about-city-dot").each(function (d) {
      const el = d3.select(this);
      const isActive = activeCityIds.includes(el.attr("data-city"));
      el.classed("active", isActive).transition().duration(400).attr("r", isActive ? 5 : 2.5);
    });

    /* Labels */
    sel.selectAll<SVGTextElement, (typeof CITIES)[number]>("text.about-city-label").each(function () {
      const el = d3.select(this);
      const isActive = activeCityIds.includes(el.attr("data-city"));
      el.classed("active", isActive);
    });

    /* Pulse */
    sel.selectAll<SVGCircleElement, (typeof CITIES)[number]>("circle.about-city-pulse").each(function () {
      const el = d3.select(this);
      const isActive = activeCityIds.includes(el.attr("data-city"));
      if (isActive) {
        const loop = () => {
          el.attr("r", 5)
            .attr("opacity", 0.6)
            .transition()
            .duration(1200)
            .attr("r", 14)
            .attr("opacity", 0)
            .on("end", function () {
              if (el.classed("active")) loop();
            });
        };
        el.classed("active", true);
        loop();
      } else {
        el.classed("active", false).interrupt().attr("r", 0).attr("opacity", 0);
      }
    });
  }, [activeCityIds]);

  /* ---- Render ---- */
  return (
    <>
      {/* Header */}
      <div className="section-label">The Journey</div>
      <h2 className="section-title" style={{ marginBottom: 16 }}>
        From organizer to architect<span className="accent-dot">.</span>
      </h2>
      <p className="about-body-text" style={{ maxWidth: 640, marginBottom: 64 }}>
        The path from Providence to building AI context architecture wasn&rsquo;t linear &mdash; but the question driving it never changed.
      </p>

      {/* Two-column grid */}
      <div className="about-journey-grid">
        {/* Timeline column */}
        <div>
          {TIMELINE.map((entry, i) => (
            <div
              key={entry.year}
              ref={(el) => setEntryRef(el, i)}
              className="about-timeline-entry"
            >
              {/* Rail */}
              <div className="about-timeline-rail">
                <div className={`about-timeline-dot${activeEntry === i ? " active" : ""}`} />
                <div className="about-timeline-line" />
              </div>

              {/* Content */}
              <div className="about-timeline-content">
                <div className="about-timeline-year">{entry.year}</div>
                <h3>{entry.title}</h3>
                <div className="about-timeline-company">{entry.company}</div>
                <p className="about-timeline-desc">{entry.description}</p>
                {entry.metrics && (
                  <div className="about-timeline-metrics">{entry.metrics}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky map column */}
        <div className="about-sticky-map">
          <div className="about-map-label">{mapLabel || "Eleven cities and counting"}</div>
          <div ref={mapRef} />

          {/* City cards grid */}
          <div className="about-city-cards">
            {CITIES.map((city) => (
              <div
                key={city.id}
                className={`about-city-card${activeCityIds.includes(city.id) ? " active" : ""}`}
              >
                <div className="about-city-card-name">{city.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
