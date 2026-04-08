import '@/styles/logos-section.css';
import { logoEntries } from '@/content/logos';

export default function LogosSection() {
  return (
    <section className="validation" aria-label="Companies I've shipped products for">
      <div className="container">
      <div className="validation-label">I&apos;ve shipped products for</div>

      {/* Desktop: logo grid with hover overlays */}
      <div className="logo-grid">
        {logoEntries.map((logo) => (
          <div key={logo.name} className="logo-cell">
            {logo.name === "USAID" ? (
              <div className="logo-text">USAID</div>
            ) : (
              <div className={`logo-wrap${logo.sizeClass ? ` ${logo.sizeClass}` : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.svgFile} alt={logo.name} />
              </div>
            )}
            <div className="logo-overlay">
              <div className="logo-overlay-name">{logo.name}</div>
              <div className="logo-overlay-desc">{logo.description}</div>
            </div>
          </div>
        ))}

        {/* Statement cell spanning last 2 columns */}
        <div className="logo-cell statement-cell">
          <p className="statement-text"><span>200+</span> AI systems, data platforms, web applications and enterprise websites launched in my career.</p>
        </div>
      </div>

      {/* Mobile: descriptive text cards */}
      <div className="logo-cards-mobile">
        {logoEntries.map((logo) => (
          <div key={logo.name} className="company-card-mobile">
            <div className="company-card-name">{logo.name}</div>
            <div className="company-card-desc">{logo.description}</div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}
