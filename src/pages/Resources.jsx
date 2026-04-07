import { useState } from 'react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { Icon, IconRing } from "../components/Icons";
import './Resources.css';

const FILTERS = ['All', 'Teachings', 'Devotionals', 'Newsletters', 'Conference Materials'];

const QUICK_ACCESS = [
  { iconName: 'headphones', pre: 'Listen to',  title: 'Audio Recordings',      desc: 'Listen to powerful teachings and messages on the go.',                                        btn: 'Listen Now'           },
  { iconName: 'bible', pre: 'Read the',   title: 'Word for the Month',     desc: 'Receive the prophetic focus and key scriptures for the current month.',                      btn: 'Read Monthly Word'    },
  { iconName: 'calendar', pre: 'Read the',   title: 'Word for the Week',      desc: 'Stay rooted with weekly revelation and declarations to guide your path.',                    btn: 'Read This Week\'s Word' },
  { iconName: 'newsletter', pre: 'RLW',        title: 'Newsletter',             desc: 'Get updates, insights, events and encouragement delivered to your inbox.',                  btn: 'View Newsletter'      },
];

const FEATURED = [
  {
    tag: 'WORD FOR THE MONTH',
    title: 'Incredible Things 2: Overcoming on Every Side',
    ref:   'Deuteronomy 32:11-12 (KJV)',
    quote: '"As an eagle stirreth up her nest… So the LORD alone did lead him…."',
    btn:   'Read Full Word for the Month',
    bg:    'rgba(45,27,107,0.45)',
  },
  {
    tag: 'WORD FOR THIS WEEK',
    title: 'Walk in the Spirit with Intention',
    ref:   'Galatians 5:16 (KJV)',
    quote: '"This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh."',
    btn:   'Read Full Word for the Week',
    bg:    'rgba(20,30,45,0.65)',
  },
];

const LIBRARY = [
  { tag: 'Teaching',    iconName: 'headphones', title: 'Walking in the Reality of the Christ-Life',       date: 'Oct 12, 2025', type: 'Audio' },
  { tag: 'Devotional',  iconName: 'bible', title: 'Daily Fellowship with Christ',                     date: 'Nov 2025',     type: 'PDF'   },
  { tag: 'Newsletter',  iconName: 'newsletter', title: 'RLW Newsletter – October Edition',                 date: 'Oct 30, 2025', type: 'PDF'   },
  { tag: 'Conference',  iconName: 'headphones', title: 'Royal Posture Camp 2026 Session Recordings',       date: 'Aug 2025',     type: 'Audio' },
  { tag: 'Teaching',    iconName: 'headphones', title: 'The Life of Christ Made Real',                     date: 'Sep 2025',     type: 'Audio' },
  { tag: 'Devotional',  iconName: 'bible', title: 'Knowing Him: Devotional Series',                   date: 'Oct 2025',     type: 'PDF'   },
  { tag: 'Newsletter',  iconName: 'newsletter', title: 'RLW Newsletter – September Edition',               date: 'Sep 30, 2025', type: 'PDF'   },
  { tag: 'Conference',  iconName: 'headphones', title: 'Discovery Camp 2025: Full Message Archive',        date: 'Aug 2025',     type: 'Audio' },
];

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? LIBRARY
    : LIBRARY.filter((l) => l.tag === activeFilter.replace('s', '').replace('Conference Materials', 'Conference'));

  return (
    <div>
      <PageHero
        label="RESOURCES"
        title="Grow in the Word.<br />Live the Christ-Life."
        subtitle="Access teachings, revelations, and spiritual resources that strengthen your walk and deepen your understanding of the reality of Christ."
      />

      {/* ── Quick Access ── */}
      <section style={{ padding: '60px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>QUICK ACCESS</span>
            <h2 className="resources__h2" style={{ textAlign: 'center' }}>Choose a Resource</h2>
            <p style={{ fontSize: 13.5, color: 'var(--w60)' }}>Get equipped and stay connected with fresh revelation every week.</p>
          </div>
          <div className="grid-4">
            {QUICK_ACCESS.map((q) => (
              <div key={q.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                  <IconRing name={q.iconName} size={52} />
                </div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.45)', marginBottom: 3 }}>{q.pre}</div>
                <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 14.5, fontWeight: 600, fontStyle: 'italic', marginBottom: 9 }}>{q.title}</h3>
                <p style={{ fontSize: 12.5, color: 'var(--w60)', lineHeight: 1.65, marginBottom: 18 }}>{q.desc}</p>
                <Button variant="outline" size="sm">{q.btn} →</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section style={{ padding: '52px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>FEATURED CONTENT</span>
          </div>
          <div className="grid-2">
            {FEATURED.map((f) => (
              <div key={f.tag} className="resources__featured-card" style={{ background: f.bg }}>
                <span className="tag" style={{ marginBottom: 13, display: 'inline-block' }}>{f.tag}</span>
                <h3 className="resources__featured-title">{f.title}</h3>
                <div style={{ fontSize: 12.5, color: 'var(--gold)', marginBottom: 14 }}>{f.ref}</div>
                <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--w70)', lineHeight: 1.75, marginBottom: 18 }}>{f.quote}</p>
                <Button variant="ghost" size="sm">{f.btn} →</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Library ── */}
      <section style={{ padding: '52px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <span className="section-label">ALL RESOURCES LIBRARY</span>
              <p style={{ fontSize: 13, color: 'var(--w60)' }}>Explore messages, devotionals and past newsletters.</p>
            </div>
            <input className="form-input" placeholder="🔍 Search teachings, devotionals…" style={{ width: 280 }} />
          </div>
          <div style={{ display: 'flex', gap: 9, marginBottom: 28, flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
          </div>
          <div className="grid-4">
            {filtered.map((l, i) => (
              <div key={i} className="card resources__lib-card">
                <div className="resources__lib-thumb">
                  <IconRing name={l.iconName} size={48} />
                </div>
                <div style={{ padding: '14px' }}>
                  <span className="tag" style={{ fontSize: 9.5, marginBottom: 7, display: 'inline-block' }}>{l.tag}</span>
                  <h4 style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.5, marginBottom: 9 }}>{l.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{l.date}</span>
                    <span style={{ fontSize: 11, color: 'var(--gold)', background: 'rgba(201,168,76,0.1)', padding: '2px 8px', borderRadius: 4 }}>● {l.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subscribe ── */}
      <section style={{ padding: '44px 0 76px', background: 'var(--dark)' }}>
        <div className="container">
          <div className="resources__subscribe">
            <div>
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 21, fontWeight: 700, fontStyle: 'italic', marginBottom: 8 }}>Stay Connected & Keep Growing</h3>
              <p style={{ fontSize: 13, color: 'var(--w60)', maxWidth: 380, lineHeight: 1.72 }}>
                Subscribe to the RLW Newsletter and receive fresh revelation, updates and encouragement each month.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 11 }}>
              <input className="form-input" placeholder="Enter your email address" style={{ width: 240 }} />
              <Button style={{ flexShrink: 0 }}>Subscribe →</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
