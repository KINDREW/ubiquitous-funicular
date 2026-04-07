import { useState } from 'react';
import { Icon, IconRing } from '../components/Icons';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import './Gallery.css';

const FILTERS = ['All Moments', 'Camp Meetings', 'Teachings & Trainings', 'Outreach & Missions', 'Fellowship'];
const FILTER_ICONS = ['⊞', '⛺', '📖', '❤️', '👥'];

const FEATURED = [
  { tag: 'CAMP MEETING', title: 'Incredible Things Camp 2025', sub: 'Worship & Encounter', date: 'Aug 2025', iconName: 'cross', bg: 'rgba(26,15,60,0.9)',  category: 'Camp Meetings'          },
  { tag: 'TEACHING',     title: 'Teaching & Impartation',     sub: 'Word Session',        date: 'Jul 2025', iconName: 'bible', bg: 'rgba(45,27,107,0.9)', category: 'Teachings & Trainings'  },
  { tag: 'OUTREACH',     title: 'Community Outreach',         sub: 'Love in Action',      date: 'May 2025', iconName: 'heart', bg: 'rgba(20,48,32,0.9)',  category: 'Outreach & Missions'    },
  { tag: 'FELLOWSHIP',   title: 'Chapter Leaders Retreat',    sub: 'Leaders & Team',      date: 'Apr 2025', iconName: 'users', bg: 'rgba(45,27,107,0.9)', category: 'Fellowship'             },
];

const PHOTOS = [
  { label: 'Camp Meeting',        bg: 'rgba(26,15,60,0.9)',    iconName: 'cross', category: 'Camp Meetings'          },
  { label: 'CBC Training',        bg: 'rgba(45,27,107,0.9)',   iconName: 'bible', category: 'Teachings & Trainings'  },
  { label: 'Outreach',            bg: 'rgba(20,48,32,0.85)',   iconName: 'heart', category: 'Outreach & Missions'    },
  { label: 'Fellowship',          bg: 'rgba(28,20,48,0.9)',    iconName: 'users', category: 'Fellowship'             },
  { label: 'Teaching',            bg: 'rgba(56,20,12,0.9)',    iconName: 'bible', category: 'Teachings & Trainings'  },
  { label: 'Chapter Gathering',   bg: 'rgba(20,30,56,0.9)',    iconName: 'users', category: 'Fellowship'             },
  { label: 'Youth Camp Night',    bg: 'rgba(18,18,8,0.9)',     iconName: 'flame', category: 'Camp Meetings'          },
  { label: 'Prayer & Intercession', bg: 'rgba(45,27,107,0.9)', iconName: 'prayer', category: 'Fellowship'            },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All Moments');
  const [sortOrder, setSortOrder] = useState('Newest First');

  const filteredFeatured = activeFilter === 'All Moments'
    ? FEATURED
    : FEATURED.filter((f) => f.category === activeFilter);

  const filteredPhotos = activeFilter === 'All Moments'
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <div>
      <PageHero
        label="GALLERY"
        title="Moments &amp;<br />Encounters"
        subtitle="A glimpse into the life, gatherings, and impact of Real Life World Inc. Lives are transformed, truths are revealed, and communities are built in the presence of God."
      />

      {/* ── Filters ── */}
      <div className="gallery__filter-bar">
        <div className="container-wide">
          <div style={{ display: 'flex', gap: 9, alignItems: 'center', flexWrap: 'wrap' }}>
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                style={{ fontSize: 12.5 }}
                onClick={() => setActiveFilter(f)}
              >
                {FILTER_ICONS[i]} {f}
              </button>
            ))}
            <div style={{ marginLeft: 'auto' }}>
              <input className="form-input" placeholder="🔍 Search photos…" style={{ width: 190 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Featured Moments ── */}
      <section style={{ padding: '56px 0', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
            <h2 className="gallery__h2">Featured Moments</h2>
            <Button variant="ghost" size="sm">View Full Gallery →</Button>
          </div>

          {filteredFeatured.length === 0 ? (
            <p style={{ color: 'var(--w60)', fontSize: 14 }}>No featured moments in this category yet.</p>
          ) : (
            <div className="grid-4">
              {filteredFeatured.map((f) => (
                <div key={f.title} className="gallery__feat-card" style={{ background: f.bg }}>
                  <div className="gallery__feat-inner">
                    <div className="gallery__feat-glow" />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <IconRing name={f.iconName} size={52} bright />
                    </div>
                    <div style={{ position: 'absolute', top: 10, left: 10 }}>
                      <span className="tag" style={{ fontSize: 9 }}>{f.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: '13px 15px 16px' }}>
                    <h4 style={{ fontWeight: 600, fontSize: 13, marginBottom: 5, lineHeight: 1.3 }}>{f.title}</h4>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                      <Icon name="calendar" size={12} />
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{f.sub}</span>
                      <span style={{ fontSize: 11, color: 'var(--gold)' }}>{f.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── All Photos ── */}
      <section style={{ padding: '0 0 56px', background: 'var(--dark)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h2 className="gallery__h2" style={{ fontSize: 20 }}>All Photos</h2>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 12.5, color: 'var(--w60)' }}>Sort by:</span>
              <select
                className="form-input"
                style={{ width: 'auto', padding: '6px 13px', fontSize: 12, cursor: 'pointer' }}
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          {filteredPhotos.length === 0 ? (
            <p style={{ color: 'var(--w60)', fontSize: 14 }}>No photos in this category yet.</p>
          ) : (
            <div className="grid-4">
              {filteredPhotos.map((p, i) => (
                <div key={i} className="gallery__photo-tile" style={{ background: p.bg }}>
                  <div className="gallery__photo-glow" />
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14, zIndex: 1, position: 'relative' }}>
                    <IconRing name={p.iconName} size={40} />
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--w80)', fontWeight: 500, zIndex: 1, position: 'relative' }}>⊞ {p.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Share Banner ── */}
      <section style={{ padding: '0 0 76px', background: 'var(--dark)' }}>
        <div className="container">
          <div className="gallery__share-banner">
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <IconRing name="camera" size={52} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 19, fontWeight: 700, fontStyle: 'italic', marginBottom: 6 }}>Share Your Moments With Us</h3>
                <p style={{ fontSize: 13.5, color: 'var(--w60)', maxWidth: 440, lineHeight: 1.72 }}>
                  Be part of the story! Send us your photos and videos from gatherings, outreaches,
                  and encounters so we can celebrate together.
                </p>
              </div>
            </div>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button>Submit Your Photos →</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
