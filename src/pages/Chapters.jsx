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

const MAP_PINS = [
  { top: '40%', left: '29%' }, { top: '27%', left: '49%' },
  { top: '35%', left: '27%' }, { top: '56%', left: '32%' },
  { top: '42%', left: '36%' }, { top: '30%', left: '19%' },
];

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

            {/* Map placeholder */}
            <div className="chapters__map-box">
              <div className="chapters__map-glow" />
              {MAP_PINS.map((p, i) => (
                <div key={i} className="chapters__pin" style={{ top: p.top, left: p.left }} />
              ))}
              {/* Accra pop-up */}
              <div className="chapters__popup">
                <div style={{ fontSize: 9.5, color: 'var(--gold)', fontWeight: 700, letterSpacing: 1.5, marginBottom: 3 }}>ACCRA, GHANA</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>RLW Accra Chapter</div>
                <div style={{ fontSize: 11.5, color: 'var(--w60)', margin: '3px 0' }}>🇬🇭 Ghana</div>
                <div style={{ fontSize: 11, color: 'var(--w60)', marginBottom: 8 }}>Sundays • 4:00 PM</div>
                <Button variant="outline" size="sm">View Chapter →</Button>
              </div>
              <p style={{ fontSize: 12, color: 'var(--w60)', zIndex: 1, position: 'relative' }}>World Chapter Map</p>
            </div>
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
