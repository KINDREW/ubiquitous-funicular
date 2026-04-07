import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button';
import { Icon, IconRing } from "../components/Icons";
import "./Home.css";

/* ─── Programs — use shared Icons library ─── */
const PROGRAMS = [
  {
    iconName: "bible",
    title: "Discipleship",
    desc: "Raising believers grounded in the Word and living the Christ-Life daily.",
  },
  {
    iconName: "grad",
    title: "Capacity Building (CBC)",
    desc: "Equipping individuals with spiritual & personal systems to maximise their lives.",
  },
  {
    iconName: "flame",
    title: "Camp Meetings",
    desc: "Transformational gatherings marked by revelation, impartation & encounters.",
  },
  {
    iconName: "globe",
    title: "Outreach & Missions",
    desc: "Extending the reality of Christ through practical love, service and demonstration of power.",
  },
];

/* ─── Events ─── */
const EVENTS = [
  {
    dateLine1: "JAN",
    dateLine2: "15-17",
    year: "2026",
    tag: "FEATURED",
    title: "Discovery Camp 2026",
    sub: "Theme: Royal Posture",
    desc: "A 3-day transformational experience to activate kingdom principles.",
  },
  {
    dateLine1: "FEB",
    dateLine2: "08",
    year: "",
    tag: "",
    title: "CBC Training",
    sub: "Personal Operating System",
    desc: "Equip yourself for a life of intentional kingdom impact.",
  },
  {
    dateLine1: "MAR",
    dateLine2: "22",
    year: "",
    tag: "",
    title: "Monthly Gathering",
    sub: "Word • Worship • Growth",
    desc: "Come together, encounter God, and grow in the Christ-Life.",
  },
];

/* ─── Resources ─── */
const RESOURCES = [
  { iconName: "bible", label: "Teachings", sub: "messages" },
  { iconName: "calendar", label: "Devotionals", sub: "daily insights" },
  {
    iconName: "books",
    label: "Books & Materials",
    sub: "resources for growth",
  },
  {
    iconName: "headphones",
    label: "Media",
    sub: "Audio & video content library",
  },
];

const GALLERY_PREVIEW = [
  { label: "FEATURED", bg: "linear-gradient(135deg,#3d1a6b,#1a0f3c)" },
  { label: "FEATURED", bg: "linear-gradient(135deg,#4a1a6b,#200f40)" },
  { label: "FELLOWSHIP", bg: "linear-gradient(135deg,#1a2d5c,#0d1a3c)" },
  { label: "", bg: "linear-gradient(135deg,#2d1b6b,#1a0f3c)" },
  { label: "", bg: "linear-gradient(135deg,#1a3020,#0d2018)" },
  { label: "", bg: "linear-gradient(135deg,#2d1b4b,#1a0f3c)" },
];

/* ─────────────────────────────────────────────────────────
   EVENTS ACCORDION
   - Default: first event is expanded (featured)
   - Hover any row → that row expands with full desc +
     Register Now button; all others collapse
───────────────────────────────────────────────────────── */
function EventsAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-ev">
      <div className="h-ev__header">
        <div>
          <span className="section-label">UPCOMING EVENTS</span>
          <h2 className="h-ev__title">Events</h2>
        </div>
        <Link to="/events" className="text-link text-link--sm">
          View All Events →
        </Link>
      </div>

      <div className="h-ev__list">
        {EVENTS.map((e, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              className={`h-ev-row ${isActive ? "h-ev-row--active" : ""} ${i === 0 && isActive ? "h-ev-row--featured" : ""}`}
              onMouseEnter={() => setActive(i)}
            >
              {/* Purple date badge */}
              <div className="h-ev-row__date">
                <span className="h-ev-row__date-mo">{e.dateLine1}</span>
                <span className="h-ev-row__date-dd">{e.dateLine2}</span>
                {e.year && <span className="h-ev-row__date-yr">{e.year}</span>}
              </div>

              {/* Content */}
              <div className="h-ev-row__body">
                {i === 0 && isActive && (
                  <span
                    className="tag"
                    style={{
                      fontSize: 9,
                      marginBottom: 4,
                      display: "inline-block",
                    }}
                  >
                    FEATURED
                  </span>
                )}
                <div className="h-ev-row__name">{e.title}</div>
                <div className="h-ev-row__sub">{e.sub}</div>

                {/* Expandable content — only shown when active */}
                <div
                  className={`h-ev-row__expand ${isActive ? "h-ev-row__expand--open" : ""}`}
                >
                  <div>
                    <p className="h-ev-row__desc">{e.desc}</p>
                    <Link to="/events" style={{ textDecoration: "none" }}>
                      <button
                        className="btn-pill-outline btn-pill-outline--xs"
                        style={{ marginTop: 10 }}
                      >
                        Register Now →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* ══════════════════════════
          SECTION 1 — HERO
          Text left · Photo right
          Gold glow orb beside text
          ══════════════════════════ */}
      <section className="home-hero">
        <div className="home-hero__glow1" />
        <div className="home-hero__glow2" />
        <div className="home-hero__cross-glow" />
        <div className="container-wide home-hero__inner fade-up">
          <span className="section-label">REAL LIFE WORLD INC.</span>
          <h1 className="home-hero__title">
            Revealing the
            <br />
            Reality of the
            <br />
            <span style={{ color: "var(--gold)" }}>Christ-Life</span>
          </h1>
          <p className="home-hero__sub">
            Raising a generation to live intentionally in the fullness of Christ
            through revelation, discipleship, and spiritual formation.
          </p>
          <div className="home-hero__btns">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button size="lg">Join the Movement →</Button>
            </Link>
            <Link to="/resources" style={{ textDecoration: "none" }}>
              <Button size="lg" variant="ghost">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — THIS SEASON
          Left: label + big title only
          Right: verse BOX (verse only, no description)
                 then description TEXT below the box
          Box has angled/irregular left edge
          ══════════════════════════════════════════ */}
      <section className="h-season">
        <div className="container-wide h-season__row">
          {/* Left */}
          <div className="h-season__left">
            <span className="section-label">THIS SEASON</span>
            <h2 className="h-season__title">
              Incredible Things 2:
              <br />
              Overcoming on Every Side
            </h2>
          </div>

          {/* Right */}
          <div className="h-season__right">
            {/* Verse card — angled left edge via clip-path */}
            <div className="h-season__verse-card">
              <div className="h-season__verse-icon">
                <IconRing name="bible" size={46} />
              </div>
              <div>
                <p className="h-season__verse-text">
                  "As an eagle stirreth up her nest, fluttereth over her young,
                  spreadeth abroad her wings, taketh them, beareth them on her
                  wings: So the LORD alone did lead him...."
                </p>
                <p className="h-season__verse-ref">
                  — Deuteronomy 32:11-12 (KJV)
                </p>
              </div>
            </div>
            {/* Description OUTSIDE and BELOW the box */}
            <p className="h-season__desc">
              This is our season of elevation and dominion. The Lord is causing
              us to rise above limitations, overcome on every side, and walk in
              the fullness of His divine intent.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — ABOUT
          Left: Holy Bible image
          Right: label + title + paragraphs + plain link
          ══════════════════════════════════════════ */}
      <section className="h-about">
        <div className="container-wide h-about__row">
          {/* Left: Bible photo */}
          <div className="h-about__img-wrap">
            <div className="h-about__img-glow" />
            <div className="h-about__img">
              {/* Illustrated Bible */}
              <div className="h-bible">
                <div className="h-bible__cover">
                  <div className="h-bible__spine" />
                  <div className="h-bible__pages-edge" />
                  <div className="h-bible__text">
                    <div className="h-bible__holy">HOLY</div>
                    <div className="h-bible__bible">BIBLE</div>
                  </div>
                  <div className="h-bible__cross">✝</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="h-about__text">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="h-about__title">About Real Life World Inc.</h2>
            <p className="h-about__para">
              Real Life World Inc. is a ministry committed to revealing the
              reality of the Christ-Life and raising people to live according to
              the revelation of God.
            </p>
            <p className="h-about__para">
              Founded on the conviction that Christ is our life (Colossians
              3:3-4), we exist to make this life real through teaching,
              discipleship, gatherings, and the demonstration of God's power.
            </p>
            {/* Plain gold text link — NO border, NO background */}
            <Link to="/about" className="text-link">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — PROGRAMS
          Header row: title LEFT · subtitle RIGHT
          4-column cards below (full width)
          ══════════════════════════════════════════ */}
      <section className="h-programs">
        <div className="container-wide">
          {/* Two-column header */}
          <div className="h-programs__header">
            <div className="h-programs__header-left">
              <span className="section-label">WHAT WE DO</span>
              <h2 className="h-programs__title">Our Impact &amp; Programs</h2>
            </div>
            <div className="h-programs__header-right">
              <p className="h-programs__subtitle">
                We are committed to building people spiritually and practically
                for a life of purpose, power, and kingdom impact.
              </p>
            </div>
          </div>

          {/* 4 cards */}
          <div className="h-programs__grid">
            {PROGRAMS.map((p, i) => (
              <div key={p.title} className="h-prog-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <IconRing name={p.iconName} size={54} bright={i === 2} />
                </div>
                <h3 className="h-prog-card__name">{p.title}</h3>
                <p className="h-prog-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — CHAPTERS + EVENTS
          Left: chapters + world-map graphic + 2 buttons
          Right: events list with date boxes
          ══════════════════════════════════════════ */}
      <section className="h-chap-ev">
        <div className="container-wide h-chap-ev__row">
          {/* ── Chapters ── */}
          <div className="h-chap">
            <span className="section-label">A GLOBAL MOVEMENT</span>
            <h2 className="h-chap__title">Our Chapters</h2>

            <p className="h-chap__desc">
              Real Life World is growing across nations and regions, raising
              communities committed to living the Christ-Life.
            </p>
            <div className="h-chap__btns">
              <Link to="/chapters" style={{ textDecoration: "none" }}>
                <button className="btn-pill-gold">
                  Find a Chapter <Icon name="pin" size={13} />
                </button>
              </Link>
              <Link to="/chapters" style={{ textDecoration: "none" }}>
                <button className="btn-pill-outline">Start a Chapter</button>
              </Link>
            </div>
          </div>

          {/* ── Events accordion ── */}
          <EventsAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — RESOURCES + GALLERY
          Left: 4 resource tiles + plain text link
          Right: 3×2 gallery grid + view all link
          ══════════════════════════════════════════ */}
      <section className="h-res-gal">
        <div className="container-wide h-res-gal__row">
          {/* Resources */}
          <div className="h-res">
            <span className="section-label">GROW IN THE WORD</span>
            <h2 className="h-res__title">Resources</h2>
            <p className="h-res__sub">
              Access teachings and materials to deepen your walk.
            </p>
            <div className="h-res__grid">
              {RESOURCES.map((r) => (
                <div key={r.label} className="h-res-tile">
                  <div className="h-res-tile__icon-ring">
                    <IconRing name={r.iconName} size={44} />
                  </div>
                  <div className="h-res-tile__label">{r.label}</div>
                  <div className="h-res-tile__sub">{r.sub}</div>
                </div>
              ))}
            </div>
            <Link
              to="/resources"
              className="text-link"
              style={{ marginTop: 14, display: "inline-block" }}
            >
              Explore All Resources →
            </Link>
          </div>

          {/* Gallery */}
          <div className="h-gal">
            <span className="section-label">MOMENTS &amp; ENCOUNTERS</span>
            <h2 className="h-gal__title">Gallery</h2>
            <p className="h-gal__sub">
              A glimpse into the life and impact of RLW.
            </p>
            <div className="h-gal__grid">
              {GALLERY_PREVIEW.map((g, i) => (
                <Link
                  key={i}
                  to="/gallery"
                  className="h-gal-thumb"
                  style={{ background: g.bg }}
                >
                  <div className="h-gal-thumb__glow" />
                  {g.label && (
                    <span className="h-gal-thumb__label">{g.label}</span>
                  )}
                </Link>
              ))}
            </div>
            <div className="h-gal__footer">
              <Link to="/gallery" className="text-link">
                View Full Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — CTA  (no box — text sits
          directly on the section background)
          ══════════════════════════════════════════ */}
      <section className="h-cta">
        <div className="h-cta__glow-l" />
        <div className="h-cta__glow-r" />
        <div className="container h-cta__content">
          <h2 className="h-cta__title">Be Part of What God Is Doing</h2>
          <p className="h-cta__sub">
            Step into a life of purpose, power, and transformation. Join a
            community committed to living the <em>real</em> life in Christ.
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-pill-gold">Join the Movement →</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
