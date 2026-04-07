import { Link } from 'react-router-dom';
import { Icon, IconRing } from '../components/Icons';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import './Support.css';

const IMPACTS = [
  { iconName: 'bible', title: 'The Word',      sub: 'is taught'          },
  { iconName: 'users', title: 'Lives',         sub: 'are transformed'    },
  { iconName: 'globe', title: 'Communities',   sub: 'are impacted'       },
  { iconName: 'church', title: 'Chapters',       sub: 'are established'    },
];

const CARDS = [
  {
    iconName: 'handshake',
    title: 'Partnership',
    desc: 'Become a monthly or yearly partner and help us advance the Christ-Life to individuals, communities, and nations.',
    listLabel: 'What Your Partnership Supports:',
    list: ['Teachings & discipleship programs', 'Chapter development & leadership', 'Outreach & community impact', 'Global ministry operations'],
    btn: 'Become a Partner',
    bg: 'rgba(26,15,60,0.85)',
  },
  {
    iconName: 'tent',
    title: 'Camp Sponsorship',
    desc: 'Partner with us to host life-transforming camps that raise and empower a generation rooted in the Christ-Life.',
    listLabel: 'Sponsorship Impact:',
    list: ['Provides accommodation & logistics', 'Supports materials, meals & resources', 'Enables more young people to attend', 'Expands the reach of The Discovery Camp'],
    btn: 'Sponsor a Camp',
    bg: 'rgba(20,48,32,0.75)',
  },
  {
    iconName: 'gift',
    title: 'Special Offerings',
    desc: 'Give toward specific needs, projects, and kingdom initiatives as the Spirit leads.',
    listLabel: 'Current Offering Opportunities:',
    list: ['Building & infrastructure projects', 'Media & resource development', 'Missions & humanitarian outreach', 'Special ministry initiatives'],
    btn: 'Give a Special Offering',
    bg: 'rgba(45,27,107,0.85)',
  },
];

export default function Support() {
  return (
    <div>
      <PageHero
        label="SUPPORT US"
        title="Partner With God<br />in Advancing the Christ-Life"
        subtitle="Your support helps us raise a generation that lives according to the revelation of God and demonstrates the reality of Christ in the world."
      />

      {/* ── Why ── */}
      <section style={{ padding: '64px 0', background: 'var(--dark2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="support__h2" style={{ textAlign: 'center' }}>Why Your Support Matters</h2>
            <p style={{ fontSize: 13.5, color: 'var(--w60)', maxWidth: 500, margin: '0 auto', lineHeight: 1.72 }}>
              Every seed sown into Real Life World Inc. goes into the Word, discipleship, trainings,
              convocations, camps, outreach missions, and the establishment of chapters worldwide.
            </p>
          </div>
          <div className="grid-4">
            {IMPACTS.map((imp) => (
              <div key={imp.title} style={{ textAlign: 'center', padding: '22px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                  <IconRing name={imp.iconName} size={56} />
                </div>
                <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--font-accent)', fontSize: 16, fontWeight: 600, fontStyle: 'italic', marginBottom: 3 }}>{imp.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--w60)' }}>{imp.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support Cards ── */}
      <section style={{ padding: '60px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div className="grid-3">
            {CARDS.map((c) => (
              <div key={c.title} className="support__card">
                {/* Banner with icon */}
                <div className="support__card-banner" style={{ background: `linear-gradient(135deg, ${c.bg}, rgba(8,6,20,0.96))` }}>
                  <div className="support__card-icon">
                    <IconRing name={c.iconName} size={56} bright />
                  </div>
                  {/* Large faint bg icon */}
                  <div style={{ opacity: 0.08, position: 'absolute', bottom: 8, right: 16 }}>
                    <Icon name={c.iconName} size={64} />
                  </div>
                </div>

                <div style={{ padding: '20px 22px 26px', marginTop: 10 }}>
                  <h3 className="support__card-title">{c.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--w60)', lineHeight: 1.72, marginBottom: 14 }}>{c.desc}</p>
                  <div className="support__card-list-section">
                    <div style={{ fontSize: 11.5, color: 'var(--gold)', fontWeight: 600, marginBottom: 9 }}>{c.listLabel}</div>
                    <ul className="check-list">
                      {c.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <Link to="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="outline" size="sm" fullWidth>{c.btn} →</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scripture + CTA ── */}
      <section style={{ padding: '52px 0 76px', background: 'var(--dark2)' }}>
        <div className="container">
          <div className="support__scripture-cta">
            <div>
              <div style={{ color: 'var(--gold)', fontSize: 12.5, fontWeight: 600, marginBottom: 13 }}>Scripture Foundation</div>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontStyle: 'italic', lineHeight: 1.78, marginBottom: 11 }}>
                "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of
                necessity: for God loveth a cheerful giver."
              </p>
              <p style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 600 }}>— 2 Corinthians 9:7 (KJV)</p>
            </div>
            <div>
              <h3 className="support__h2">Be Part of the Movement</h3>
              <p style={{ fontSize: 13.5, color: 'var(--w60)', lineHeight: 1.78, marginBottom: 24 }}>
                Your partnership is more than a gift — it is an investment into lives, destinies, and
                the expansion of the Kingdom.
              </p>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button size="lg">Partner With Us Today →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
