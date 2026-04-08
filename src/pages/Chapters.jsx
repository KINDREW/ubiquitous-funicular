import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconRing } from '../components/Icons';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import './Chapters.css';

const CHAPTERS = [
  { flag: '🇬🇭', name: 'RLW Accra Chapter',      city: 'Accra, Ghana',            desc: 'A thriving community raising believers to live the Christ-Life with power and purpose.',                        schedule: 'Sundays • 4:00 PM'   },
  { flag: '🇬🇧', name: 'RLW London Chapter',     city: 'London, UK',               desc: 'Building a people established in truth and walking in the fullness of Christ in the nations.',               schedule: 'Fridays • 7:00 PM'   },
  { flag: '🇺🇸', name: 'RLW New York Chapter',   city: 'New York, USA',            desc: 'A community passionate about Christ, transformation, and kingdom impact in the city.',                        schedule: 'Saturdays • 6:00 PM' },
  { flag: '🇿🇦', name: 'RLW Johannesburg',       city: 'Johannesburg, South Africa', desc: 'Raising kingdom-minded believers to influence their world with the reality of the Christ-Life.',           schedule: 'Sundays • 10:00 AM'  },
  { flag: '🇳🇬', name: 'RLW Lagos Chapter',      city: 'Lagos, Nigeria',            desc: 'A vibrant, rapidly-growing community impacting lives with the gospel of the Christ-Life.',                  schedule: 'Sundays • 9:00 AM'   },
  { flag: '🇰🇪', name: 'RLW Nairobi Chapter',    city: 'Nairobi, Kenya',            desc: 'A passionate fellowship burning for God and raising disciples of the new covenant.',                         schedule: 'Sundays • 10:00 AM'  },
  { flag: '🇩🇪', name: 'RLW Berlin Chapter',     city: 'Berlin, Germany',           desc: 'Carrying the reality of the Christ-Life to Europe through teaching, community, and outreach.',              schedule: 'Saturdays • 5:00 PM' },
  { flag: '🇨🇦', name: 'RLW Toronto Chapter',    city: 'Toronto, Canada',           desc: 'A growing community of believers living the Christ-Life in one of Canada\'s most diverse cities.',          schedule: 'Sundays • 5:00 PM'   },
];

const FEATURED = [
  { flag: '🇳🇬', name: 'RLW Lagos Chapter',    loc: 'Lagos, Nigeria',          pastor: 'Pastor T. Adeyemi', desc: 'A vibrant, rapidly-growing community impacting lives with the gospel.' },
  { flag: '🇬🇧', name: 'RLW London Chapter',   loc: 'London, United Kingdom',  pastor: 'Pastor J. Brown',   desc: 'A multicultural community carrying the Christ-Life to the nations.'   },
  { flag: '🇰🇪', name: 'RLW Nairobi Chapter',  loc: 'Nairobi, Kenya',          pastor: 'Pastor M. Otene',   desc: 'A passionate fellowship burning for God and raising new covenant disciples.' },
];

const TESTIMONIALS = [
  { q: '"The chapter has transformed my life. I am living the Christ-Life with clarity, purpose, and power!"', name: 'Mercy A.', chapter: 'RLW Accra' },
  { q: '"Being part of RLW London has raised me into a deeper walk with God and a stronger sense of kingdom responsibility."', name: 'Daniel K.', chapter: 'RLW London' },
  { q: '"Our chapter is impacting families and youth. God is raising a generation that lives differently!"', name: 'Linda M.', chapter: 'RLW Johannesburg' },
];

/* ── Map chapter pins with accurate lat/lng converted to SVG coords ──
   SVG viewBox 0 0 1000 500 — lon [-180,180]→[0,1000], lat [85,-85]→[0,500]
   x = (lon + 180) / 360 * 1000
   y = (90  - lat) / 180 * 500
*/
const MAP_CHAPTERS = [
  { name: 'RLW Accra',        city: 'Accra, Ghana',              x: 526, y: 286, flag: '🇬🇭', schedule: 'Sundays • 4:00 PM'   },
  { name: 'RLW Lagos',        city: 'Lagos, Nigeria',             x: 519, y: 272, flag: '🇳🇬', schedule: 'Sundays • 9:00 AM'   },
  { name: 'RLW Nairobi',      city: 'Nairobi, Kenya',             x: 575, y: 285, flag: '🇰🇪', schedule: 'Sundays • 10:00 AM'  },
  { name: 'RLW Johannesburg', city: 'Johannesburg, South Africa', x: 562, y: 348, flag: '🇿🇦', schedule: 'Sundays • 10:00 AM'  },
  { name: 'RLW London',       city: 'London, UK',                 x: 487, y: 136, flag: '🇬🇧', schedule: 'Fridays • 7:00 PM'   },
  { name: 'RLW Berlin',       city: 'Berlin, Germany',            x: 505, y: 128, flag: '🇩🇪', schedule: 'Saturdays • 5:00 PM' },
  { name: 'RLW New York',     city: 'New York, USA',              x: 287, y: 163, flag: '🇺🇸', schedule: 'Saturdays • 6:00 PM' },
  { name: 'RLW Toronto',      city: 'Toronto, Canada',            x: 280, y: 148, flag: '🇨🇦', schedule: 'Sundays • 5:00 PM'   },
];

/* ─────────────────────────────────────────────────────────
   WORLD MAP — SVG with simplified continent paths +
   gold glowing pins for each RLW chapter location.
   Hover a pin to see chapter tooltip.
───────────────────────────────────────────────────────── */
function WorldMap() {
  const [active, setActive] = useState(null);

  return (
    <div className="chapters__map-box">
      {/* Ambient purple glow */}
      <div className="chapters__map-glow" />

      <svg
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        className="chapters__map-svg"
        onMouseLeave={() => setActive(null)}
      >
        <defs>
          {/* Gold pin glow filter */}
          <filter id="pinGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Active pin stronger glow */}
          <filter id="pinGlowActive" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Continent fill gradient */}
          <linearGradient id="contFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a1860" />
            <stop offset="100%" stopColor="#1a0f40" />
          </linearGradient>
        </defs>

        {/* ── Ocean background ── */}
        <rect width="1000" height="500" fill="#07051a" />

        {/* ── Latitude grid lines ── */}
        {[0.25, 0.5, 0.75].map((t, i) => (
          <line key={i} x1="0" y1={t * 500} x2="1000" y2={t * 500}
            stroke="rgba(201,168,76,0.06)" strokeWidth="0.8" />
        ))}
        {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
          <line key={i} x1={t * 1000} y1="0" x2={t * 1000} y2="500"
            stroke="rgba(201,168,76,0.06)" strokeWidth="0.8" />
        ))}

        {/* ══════════════════════════════════════════
            CONTINENT SHAPES — simplified polygons
            All coords in SVG 1000×500 space
            ══════════════════════════════════════════ */}

        {/* ── North America ── */}
        <path d="
          M 210 60 L 310 55 L 340 70 L 360 90 L 355 110 L 370 125
          L 355 140 L 340 155 L 320 170 L 310 190 L 295 205 L 280 215
          L 265 225 L 250 240 L 240 260 L 230 270 L 215 265
          L 205 255 L 195 240 L 185 225 L 175 210 L 168 195
          L 162 178 L 158 160 L 155 140 L 152 118 L 155 100
          L 165 85 L 180 72 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>

        {/* Mexico / Central America */}
        <path d="
          M 230 270 L 240 260 L 250 270 L 255 285 L 248 295
          L 238 300 L 230 295 L 225 285 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="0.8"/>

        {/* ── South America ── */}
        <path d="
          M 280 290 L 310 280 L 330 285 L 350 295 L 358 315
          L 360 340 L 355 365 L 345 390 L 330 415 L 315 430
          L 300 435 L 285 425 L 272 408 L 262 388 L 255 365
          L 252 340 L 253 315 L 260 300 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>

        {/* ── Europe ── */}
        <path d="
          M 460 80 L 500 72 L 540 75 L 560 85 L 570 100
          L 565 115 L 550 125 L 530 130 L 510 128 L 495 135
          L 478 138 L 465 130 L 455 118 L 452 102 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>

        {/* Iberian peninsula */}
        <path d="M 462 128 L 480 130 L 482 148 L 470 155 L 458 148 L 455 135 Z"
          fill="url(#contFill)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8"/>

        {/* Scandinavian bump */}
        <path d="M 500 72 L 510 58 L 522 52 L 530 60 L 525 75 L 510 78 Z"
          fill="url(#contFill)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8"/>

        {/* ── Africa ── */}
        <path d="
          M 488 168 L 510 160 L 535 158 L 555 162 L 572 170
          L 585 185 L 592 205 L 595 228 L 592 252 L 585 278
          L 572 305 L 555 328 L 540 348 L 528 365 L 520 378
          L 512 382 L 504 378 L 496 362 L 488 342 L 480 318
          L 472 292 L 466 268 L 462 245 L 460 220 L 460 198
          L 464 180 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>

        {/* Madagascar */}
        <path d="M 588 322 L 595 315 L 600 328 L 597 345 L 590 350 L 585 340 L 584 328 Z"
          fill="url(#contFill)" stroke="rgba(201,168,76,0.18)" strokeWidth="0.7"/>

        {/* ── Middle East ── */}
        <path d="
          M 578 158 L 598 150 L 620 152 L 632 162 L 628 178
          L 615 188 L 598 190 L 582 182 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8"/>

        {/* ── Asia (main body) ── */}
        <path d="
          M 560 75 L 610 62 L 660 58 L 710 55 L 760 58 L 800 65
          L 835 78 L 855 95 L 860 115 L 848 135 L 828 150
          L 805 162 L 778 170 L 750 175 L 720 178 L 692 182
          L 665 188 L 640 192 L 615 192 L 595 188 L 578 180
          L 566 168 L 558 155 L 555 138 L 555 118 L 558 98 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>

        {/* India subcontinent */}
        <path d="
          M 645 192 L 672 192 L 688 205 L 692 228 L 685 252
          L 672 268 L 658 272 L 645 262 L 635 242 L 632 218
          L 636 202 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8"/>

        {/* Southeast Asia peninsula */}
        <path d="
          M 720 178 L 742 182 L 758 195 L 762 215 L 755 232
          L 742 240 L 728 238 L 718 225 L 715 205 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8"/>

        {/* ── Australia ── */}
        <path d="
          M 755 310 L 800 298 L 842 302 L 870 318 L 882 340
          L 878 365 L 860 382 L 835 390 L 805 388 L 778 378
          L 758 360 L 748 338 L 748 320 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>

        {/* New Zealand */}
        <path d="M 892 368 L 898 355 L 905 360 L 905 375 L 898 382 L 890 378 Z"
          fill="url(#contFill)" stroke="rgba(201,168,76,0.18)" strokeWidth="0.7"/>

        {/* Japan */}
        <path d="M 832 125 L 842 118 L 850 122 L 848 134 L 840 140 L 832 136 Z"
          fill="url(#contFill)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.7"/>

        {/* UK island */}
        <path d="M 480 118 L 488 112 L 494 118 L 492 130 L 484 134 L 478 126 Z"
          fill="url(#contFill)" stroke="rgba(201,168,76,0.22)" strokeWidth="0.8"/>

        {/* Greenland */}
        <path d="
          M 335 38 L 370 28 L 400 30 L 415 42 L 408 58 L 392 68
          L 368 72 L 345 65 L 330 52 Z
        " fill="url(#contFill)" stroke="rgba(201,168,76,0.15)" strokeWidth="0.7" opacity="0.6"/>

        {/* ══════════════════════════════════════════
            CHAPTER PINS
            ══════════════════════════════════════════ */}
        {MAP_CHAPTERS.map((ch, i) => {
          const isActive = active === i;
          return (
            <g
              key={i}
              onMouseEnter={() => setActive(i)}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer pulse ring */}
              <circle
                cx={ch.x} cy={ch.y} r={isActive ? 18 : 12}
                fill="rgba(201,168,76,0.08)"
                stroke="rgba(201,168,76,0.25)"
                strokeWidth="1"
                style={{ transition: 'r 0.25s' }}
              />
              {/* Inner glow ring */}
              <circle
                cx={ch.x} cy={ch.y} r={isActive ? 10 : 7}
                fill="rgba(201,168,76,0.18)"
                filter={isActive ? 'url(#pinGlowActive)' : 'url(#pinGlow)'}
                style={{ transition: 'r 0.25s' }}
              />
              {/* Core gold dot */}
              <circle
                cx={ch.x} cy={ch.y} r={isActive ? 5 : 4}
                fill={isActive ? '#f0d070' : '#c9a84c'}
                filter={isActive ? 'url(#pinGlowActive)' : 'url(#pinGlow)'}
                style={{ transition: 'r 0.25s, fill 0.25s' }}
              />
            </g>
          );
        })}

        {/* ══════════════════════════════════════════
            ACTIVE TOOLTIP — rendered last so it's on top
            Smart positioning: flip left if near right edge
            ══════════════════════════════════════════ */}
        {active !== null && (() => {
          const ch  = MAP_CHAPTERS[active];
          const W   = 175;  // tooltip width
          const H   = 78;   // tooltip height
          // Flip horizontally if near right edge
          const flipX = ch.x + W + 20 > 1000;
          const tx  = flipX ? ch.x - W - 14 : ch.x + 14;
          // Flip vertically if near bottom
          const flipY = ch.y + H + 10 > 500;
          const ty  = flipY ? ch.y - H - 10 : ch.y - 8;

          return (
            <g style={{ pointerEvents: 'none' }}>
              {/* Shadow */}
              <rect x={tx + 2} y={ty + 2} width={W} height={H} rx="6"
                fill="rgba(0,0,0,0.5)" />
              {/* Card */}
              <rect x={tx} y={ty} width={W} height={H} rx="6"
                fill="#0f0c28" stroke="#c9a84c" strokeWidth="1.2" strokeOpacity="0.55" />
              {/* Connector line to pin */}
              <line
                x1={ch.x} y1={ch.y}
                x2={flipX ? tx + W : tx}
                y2={ty + H / 2}
                stroke="#c9a84c" strokeWidth="0.8" strokeOpacity="0.4"
                strokeDasharray="3,3"
              />
              {/* Chapter name */}
              <text x={tx + 12} y={ty + 20}
                fontSize="11" fontWeight="700" fill="#c9a84c"
                fontFamily="Inter, sans-serif" letterSpacing="0.5">
                {ch.name}
              </text>
              {/* City */}
              <text x={tx + 12} y={ty + 36}
                fontSize="10" fill="rgba(255,255,255,0.7)"
                fontFamily="Inter, sans-serif">
                {ch.city}
              </text>
              {/* Flag */}
              <text x={tx + 12} y={ty + 52}
                fontSize="13" fontFamily="serif">
                {ch.flag}
              </text>
              {/* Schedule */}
              <text x={tx + 32} y={ty + 52}
                fontSize="9.5" fill="rgba(255,255,255,0.5)"
                fontFamily="Inter, sans-serif">
                {ch.schedule}
              </text>
            </g>
          );
        })()}
      </svg>

      {/* Legend */}
      <div className="chapters__map-legend">
        <div className="chapters__map-legend-dot" />
        <span>{MAP_CHAPTERS.length} Chapters Worldwide · Hover to explore</span>
      </div>
    </div>
  );
}

export default function Chapters() {
  return (
    <div>
      <PageHero
        label="OUR CHAPTERS"
        title="A Global Movement<br />of the Christ-Life"
        subtitle="Real Life World Inc. is raising communities across regions — people committed to living and expressing the Christ-Life."
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="outline">Find a Chapter</Button>
          <Button variant="ghost">Start a Chapter</Button>
        </div>
      </PageHero>

      {/* ── Find a Chapter ── */}
      <section style={{ padding: '56px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <div className="chapters__find-grid">
            <div>
              <span className="section-label">FIND A CHAPTER</span>
              <h2 className="chapters__h2">Find a Chapter Near You</h2>
              <p style={{ fontSize: 13.5, color: 'var(--w60)', lineHeight: 1.72, marginBottom: 22 }}>
                Connect with a local community and grow in the reality of the Christ-Life together.
              </p>
              <input className="form-input" placeholder="🔍 Search city or country…" style={{ marginBottom: 12 }} />
              <select className="form-input" style={{ cursor: 'pointer' }}>
                <option>🌐 All Regions</option>
                <option>Africa</option>
                <option>Europe</option>
                <option>Americas</option>
                <option>Asia / Pacific</option>
              </select>
            </div>

            {/* ── Interactive SVG World Map ── */}
            <WorldMap />
          </div>
        </div>
      </section>

      {/* ── All Chapters Grid ── */}
      <section style={{ padding: '56px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <span className="section-label">ALL CHAPTERS</span>
              <h2 className="chapters__h2">Our Communities Worldwide</h2>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <select className="form-input" style={{ width: 'auto', padding: '8px 16px', cursor: 'pointer' }}>
                <option>All Regions</option>
              </select>
              <select className="form-input" style={{ width: 'auto', padding: '8px 16px', cursor: 'pointer' }}>
                <option>Sort by Name</option>
              </select>
            </div>
          </div>
          <div className="grid-4">
            {CHAPTERS.map((c) => (
              <div key={c.name} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="chapters__card-flag">{c.flag}</div>
                <div style={{ padding: 18 }}>
                  <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 13.5, fontWeight: 600, fontStyle: 'italic', marginBottom: 4 }}>{c.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: 'var(--gold)', marginBottom: 7 }}>
                    <Icon name="pin" size={11} />{c.city}
                  </div>
                  <p style={{ fontSize: 12.5, color: 'var(--w60)', lineHeight: 1.6, marginBottom: 10 }}>{c.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: 'rgba(255,255,255,0.45)', marginBottom: 13 }}>
                    <Icon name="clock" size={11} />{c.schedule}
                  </div>
                  <Link to="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="outline" size="sm" fullWidth>Join Chapter →</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Chapters ── */}
      <section style={{ padding: '52px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
            <span className="section-label">FEATURED CHAPTERS</span>
            <Button variant="ghost" size="sm">View All Chapters →</Button>
          </div>
          <div className="grid-3">
            {FEATURED.map((f) => (
              <div key={f.name} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div className="chapters__feat-flag">{f.flag}</div>
                <div>
                  <span className="tag" style={{ marginBottom: 6, display: 'inline-block' }}>FEATURED</span>
                  <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 14, fontWeight: 600, fontStyle: 'italic', marginBottom: 4 }}>{f.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--gold)', marginBottom: 6 }}>
                    <Icon name="pin" size={12} />{f.loc}
                  </div>
                  <p style={{ fontSize: 12.5, color: 'var(--w60)', lineHeight: 1.6, marginBottom: 10 }}>{f.desc}</p>
                  <Button variant="ghost" size="sm">Lead Pastor: {f.pastor} →</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Start / Join ── */}
      <section style={{ padding: '48px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div className="grid-2">
            {[
              { iconName: 'flag', label: 'EXPAND THE MOVEMENT', title: 'Start a Chapter in Your City',  desc: 'Be part of expanding the reach of the Christ-Life. Lead, gather, and raise a community where you are.', btn: 'Start a Chapter' },
              { iconName: 'users', label: 'FIND COMMUNITY',       title: 'Join a Chapter & Grow',         desc: 'Connect with a local fellowship and grow together in truth, love, and the reality of Christ.',            btn: 'Find a Chapter' },
            ].map((s) => (
              <div key={s.title} className="chapters__action-card">
                <IconRing name={s.iconName} size={48} />
                <div>
                  <span className="section-label" style={{ marginBottom: 7 }}>{s.label}</span>
                  <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 700, fontStyle: 'italic', marginBottom: 9 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--w60)', lineHeight: 1.72, marginBottom: 18 }}>{s.desc}</p>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button variant="outline" size="sm">{s.btn} →</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '52px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <span className="section-label" style={{ marginBottom: 20, display: 'block' }}>IMPACT & TESTIMONIES</span>
          <div className="grid-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p style={{ fontSize: 13.5, color: 'var(--w80)', lineHeight: 1.78, fontStyle: 'italic', marginTop: 16, marginBottom: 18 }}>{t.q}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <IconRing name="person" size={34} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--gold)' }}>{t.chapter}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Help bar ── */}
      <section style={{ padding: '40px 0 72px', background: 'var(--dark)' }}>
        <div className="container">
          <div className="chapters__help-bar">
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <IconRing name="headphones" size={48} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 17, fontWeight: 700, fontStyle: 'italic', marginBottom: 4 }}>Need Help or More Information?</h3>
                <p style={{ fontSize: 13, color: 'var(--w60)' }}>If you'd like to join, start a chapter, or have questions, our team is ready to assist you.</p>
              </div>
            </div>
            <div>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button>Contact Our Team →</Button>
              </Link>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.38)', textAlign: 'center', marginTop: 7 }}>reallifeworld2015@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}