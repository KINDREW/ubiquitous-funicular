import { useState } from 'react';
import { IconRing } from '../components/Icons';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import './Events.css';

const FILTERS = ['All Events', 'Gatherings', 'Conference', 'Training', 'Outreach'];

const EVENTS = [
  {
    iconName: 'users',
    title: 'The Real Life Experience',
    desc: 'Monthly regional chapter convocations and weekly Wednesday online teaching and prayer meetings.',
    s1: 'Monthly (Regional)', ss1: 'Chapter Convocations',
    s2: 'Weekly Wednesdays',  ss2: 'Online Teaching & Prayer',
    color: 'rgba(45,27,107,0.7)',
    category: 'Gatherings',
  },
  {
    iconName: 'prayer',
    title: 'Monthly Intercessory Prayers',
    desc: 'A dedicated time of corporate prayer, interceding for individuals, families, chapters and nations.',
    s1: 'Every Last Friday', ss1: '7:00 PM (GMT)',
    color: 'rgba(20,32,64,0.7)',
    category: 'Gatherings',
  },
  {
    iconName: 'star',
    title: 'The Discovery Conference',
    desc: 'A power-packed conference of revelation, impartation, and transformation for a life of purpose and impact.',
    s1: 'Annually', ss1: 'Special Dates',
    color: 'rgba(45,27,107,0.7)',
    badge: 'DISCOVERY CONFERENCE',
    category: 'Conference',
  },
  {
    iconName: 'tent',
    title: 'The Discovery Camp',
    desc: 'An immersive camp experience of teaching, encounters, fun and spiritual growth.',
    s1: 'Annually', ss1: '3–5 Days Experience',
    color: 'rgba(20,48,32,0.7)',
    category: 'Conference',
  },
  {
    iconName: 'grad',
    title: 'CBC Training',
    desc: 'The RLW Capacity Building Center trainings to enhance personal development and transformation.',
    s1: 'Ongoing', ss1: 'Cohort & Module Based',
    color: 'rgba(20,30,60,0.7)',
    category: 'Training',
  },
  {
    iconName: 'heart',
    title: 'Outreach',
    desc: 'Extending the reality of the Christ-Life through acts of love, service, and community impact.',
    s1: 'Regular', ss1: 'Across Regions & Communities',
    color: 'rgba(60,26,16,0.7)',
    category: 'Outreach',
  },
];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('All Events');

  const filtered = activeFilter === 'All Events'
    ? EVENTS
    : EVENTS.filter((e) => e.category === activeFilter);

  return (
    <div>
      <PageHero
        label="EVENTS"
        title="Gather. Grow.<br />Experience the Christ-Life."
        subtitle="Join us at our gatherings where revelation is released, lives are transformed, and communities are built."
      />

      {/* ── Filters ── */}
      <div className="events__filter-bar">
        <div className="container-wide">
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <input className="form-input" placeholder="🔍 Search events…" style={{ width: 190 }} />
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <button className="filter-tab active" style={{ fontSize: 12 }}>📅 Upcoming</button>
              <button className="filter-tab" style={{ fontSize: 12 }}>Past Events</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Events grid ── */}
      <section style={{ padding: '56px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <h2 className="events__h2">Upcoming Events</h2>
            <p style={{ fontSize: 12.5, color: 'var(--w50)' }}>Stay engaged with what God is doing through Real Life World Inc.</p>
          </div>
          <div className="grid-3">
            {filtered.map((e) => (
              <div key={e.title} className="card events__card">
                {/* Banner */}
                <div className="events__card-banner" style={{ background: `linear-gradient(135deg, ${e.color}, rgba(8,6,20,0.95))` }}>
                  {e.badge && <div className="events__badge">{e.badge}</div>}
                  <div style={{ display:'flex', alignItems:'flex-start' }}><IconRing name={e.iconName} size={42} /></div>
                </div>

                <div style={{ padding: '18px 22px 22px' }}>
                  <h3 className="events__title">{e.title}</h3>
                  <p style={{ fontSize: 12.5, color: 'var(--w60)', lineHeight: 1.7, marginBottom: 14 }}>{e.desc}</p>

                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
                    <div className="events__schedule-chip">
                      <IconRing name="calendar" size={28} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 12 }}>{e.s1}</div>
                        <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)' }}>{e.ss1}</div>
                      </div>
                    </div>
                    {e.s2 && (
                      <div className="events__schedule-chip">
                        <IconRing name="globe" size={28} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 12 }}>{e.s2}</div>
                          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)' }}>{e.ss2}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm" fullWidth>View Details →</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subscribe bar ── */}
      <section style={{ padding: '44px 0 76px', background: 'var(--dark2)' }}>
        <div className="container">
          <div className="events__subscribe">
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <IconRing name="calendar" size={52} />
              <div>
                <span className="section-label" style={{ marginBottom: 5 }}>DON'T MISS A GATHERING</span>
                <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 700, fontStyle: 'italic', marginBottom: 6 }}>Stay Updated on All Events</h3>
                <p style={{ fontSize: 13, color: 'var(--w60)', maxWidth: 360, lineHeight: 1.7 }}>
                  Subscribe to receive reminders, updates, and announcements about gatherings, conferences, trainings, and outreach activities.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 11 }}>
              <input className="form-input" placeholder="Enter your email address…" style={{ width: 230 }} />
              <Button style={{ flexShrink: 0 }}>Subscribe →</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
