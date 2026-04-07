import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import Button from '../components/Button';
import { Icon, IconRing } from '../components/Icons';
import './About.css';

const BELIEFS = [
  { iconName: 'bible',  title: 'The Word',           desc: 'The Bible is the inspired Word of God and the final authority for life and doctrine.' },
  { iconName: 'cross',  title: 'Christ as Our Life',  desc: 'Christ is our life, and our identity and existence are rooted in Him.' },
  { iconName: 'leaf',   title: 'Transformation',      desc: 'The Christian life is one of transformation through revelation, not mere religion.' },
  { iconName: 'dove',   title: 'The Holy Spirit',     desc: 'We believe in the active ministry of the Holy Spirit in guiding, powering, and transforming believers.' },
  { iconName: 'church', title: 'The Church',          desc: 'The Church is a living body, called to grow, express Christ, and impact the world.' },
];

const MANDATE = [
  'Knows Christ as their life',
  'Lives intentionally according to divine revelation',
  'Walks in truth and spiritual authority',
  'Demonstrates the life of Christ in practical ways',
];

const STATS = [
  { iconName: 'globe',  num: '15+',         label: 'Chapters Worldwide' },
  { iconName: 'grad',   num: '1000+',       label: 'Trained Through CBC' },
  { iconName: 'users',  num: 'Thousands',   label: 'Lives Transformed' },
  { iconName: 'heart',  num: 'Communities', label: 'Reached Through Outreach' },
];

export default function About() {
  return (
    <div>
      <PageHero
        label="ABOUT REAL LIFE WORLD INC."
        title="Revealing the Reality<br />of the Christ-Life"
        subtitle="A ministry committed to raising people who live according to the revelation of God and express the fullness of Christ in every sphere of life."
      />

      {/* Scripture foundation */}
      <section style={{ padding: '52px 0', background: 'var(--dark2)' }}>
        <div className="container">
          <span className="section-label">OUR FOUNDATION</span>
          <div className="about__scripture-block">
            <IconRing name="bible" size={56} />
            <div>
              <p className="about__scripture">
                "For ye are dead, and your life is hid with Christ in God. When Christ, who is our life,
                shall appear, then shall ye also appear with him in glory."
              </p>
              <p style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 600 }}>— Colossians 3:3–4 (KJV)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Mandate */}
      <section style={{ padding: '60px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div className="about__who-grid">
            <div className="about__icon-placeholder">
              <div className="about__icon-glow" />
              <IconRing name="bible" size={72} bright />
            </div>
            <div>
              <span className="section-label">WHO WE ARE</span>
              <h2 className="about__h2">Who We Are</h2>
              <p style={{ fontSize: 13.5, color: 'var(--w70)', lineHeight: 1.8, marginBottom: 12 }}>
                Real Life World Inc. is a ministry organization committed to revealing the reality of the
                Christ-Life and raising people to live according to the revelation of God.
              </p>
              <p style={{ fontSize: 13.5, color: 'var(--w70)', lineHeight: 1.8 }}>
                We exist to make the life of Christ real to individuals, communities, and nations through the
                teaching of the Word, discipleship, and the demonstration of God's power.
              </p>
            </div>
            <div>
              <span className="section-label">OUR MANDATE</span>
              <h2 className="about__h2">Our Mandate</h2>
              <p style={{ fontSize: 13.5, color: 'var(--w70)', lineHeight: 1.8, marginBottom: 14 }}>We are called to raise a generation that:</p>
              <ul className="check-list">
                {MANDATE.map((m) => <li key={m}>{m}</li>)}
              </ul>
              <p style={{ fontSize: 13.5, color: 'var(--gold)', marginTop: 14, fontStyle: 'italic' }}>
                This is not just information — it is transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '56px 0', background: 'var(--dark2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>VISION & MISSION</span>
          </div>
          <div className="grid-2">
            {[
              { iconName: 'vision', label: 'Vision',  text: 'To raise a generation that lives the Christ-Life fully and manifests His glory in every sphere of life.' },
              { iconName: 'target', label: 'Mission', text: 'To teach, disciple, equip, and activate individuals to live according to the revelation of God and demonstrate the reality of Christ.' },
            ].map((v) => (
              <div key={v.label} className="about__vm-card">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                  <IconRing name={v.iconName} size={54} />
                </div>
                <h3 className="about__h2" style={{ textAlign: 'center', fontSize: 22 }}>{v.label}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--w70)', lineHeight: 1.78, textAlign: 'center' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section style={{ padding: '56px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>WHAT WE BELIEVE</span>
          </div>
          <div className="about__beliefs-grid">
            {BELIEFS.map((b) => (
              <div key={b.title} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                  <IconRing name={b.iconName} size={50} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: 14, fontWeight: 600, marginBottom: 7 }}>{b.title}</h4>
                <p style={{ fontSize: 12.5, color: 'var(--w60)', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership + Stats */}
      <section style={{ padding: '56px 0', background: 'var(--dark2)' }}>
        <div className="container-wide">
          <div className="grid-2" style={{ gap: 48 }}>
            <div>
              <span className="section-label">LEADERSHIP</span>
              <div className="about__leader-row">
                <div className="about__leader-img">
                  <IconRing name="person" size={60} />
                </div>
                <div>
                  <h3 className="about__h2">Ps. Raph</h3>
                  <span className="tag" style={{ marginBottom: 10, display: 'inline-block' }}>FOUNDER & LEAD MINISTER</span>
                  <p style={{ fontSize: 13, color: 'var(--w60)', lineHeight: 1.75 }}>
                    Raphael Koomson is a global minister, teacher, and transformation leader committed to
                    raising individuals who live the Christ-Life through revelation, structure, and spiritual depth.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="section-label">OUR IMPACT</span>
              <div className="grid-2" style={{ marginTop: 14, gap: 14 }}>
                {STATS.map((s) => (
                  <div key={s.label} className="about__stat-card">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                      <IconRing name={s.iconName} size={40} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: 22, fontWeight: 700, color: 'var(--gold)', fontStyle: 'italic', textAlign: 'center' }}>{s.num}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--w60)', lineHeight: 1.4, marginTop: 4, textAlign: 'center' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0 76px', background: 'var(--dark)' }}>
        <div className="container">
          <CTABanner
            title="Be Part of the Movement"
            subtitle="Step into the reality of the Christ-Life and become part of what God is doing through Real Life World Inc."
            btnText="Join the Movement"
            to="/contact"
          />
        </div>
      </section>
    </div>
  );
}
