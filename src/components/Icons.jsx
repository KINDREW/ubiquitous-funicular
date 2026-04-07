/**
 * RLW Icon Library
 * All icons: gold (#c9a84c) stroke, no fill, consistent weight
 *
 * Usage:
 *   import { Icon, IconRing } from '../components/Icons';
 *   <IconRing name="mail" />          ← gold SVG on purple circle
 *   <Icon name="mail" size={20} />    ← bare SVG, no circle
 */

const G = '#c9a84c';
const S = { strokeLinecap: 'round', strokeLinejoin: 'round' };

const PATHS = {
  /* ── Communication ── */
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={G} strokeWidth="1.8" {...S}/>
      <polyline points="2,4 12,13 22,4" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.56a16 16 0 0 0 6.29 6.29l.62-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),

  /* ── Location ── */
  pin: (
    <>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={G} strokeWidth="1.8" {...S}/>
      <circle cx="12" cy="9" r="2.5" stroke={G} strokeWidth="1.7"/>
    </>
  ),
  office: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke={G} strokeWidth="1.8" {...S}/>
      <polyline points="9,22 9,12 15,12 15,22" stroke={G} strokeWidth="1.7" {...S}/>
    </>
  ),

  /* ── Time ── */
  clock: (
    <>
      <circle cx="12" cy="12" r="9" stroke={G} strokeWidth="1.8"/>
      <polyline points="12,6 12,12 16,14" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" stroke={G} strokeWidth="1.8"/>
      <line x1="3"  y1="9"  x2="21" y2="9"  stroke={G} strokeWidth="1.5"/>
      <line x1="8"  y1="2"  x2="8"  y2="6"  stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="2"  x2="16" y2="6"  stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="8"  cy="14" r="1" fill={G}/>
      <circle cx="12" cy="14" r="1" fill={G}/>
      <circle cx="16" cy="14" r="1" fill={G}/>
    </>
  ),

  /* ── Faith / Ministry ── */
  cross: (
    <>
      <line x1="12" y1="3"  x2="12" y2="21" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <line x1="5"  y1="9"  x2="19" y2="9"  stroke={G} strokeWidth="2" strokeLinecap="round"/>
    </>
  ),
  prayer: (
    <>
      <path d="M12 2C10 4 7 7 7 10a5 5 0 0 0 10 0c0-3-3-6-5-8z" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M8 14c-1 1.5-1 3 0 4.5M16 14c1 1.5 1 3 0 4.5" stroke={G} strokeWidth="1.7" {...S}/>
      <path d="M9.5 18.5c.8.8 1.6 1.2 2.5 1.2s1.7-.4 2.5-1.2" stroke={G} strokeWidth="1.7" {...S}/>
    </>
  ),
  bible: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke={G} strokeWidth="1.8" {...S}/>
      <line x1="8" y1="7"  x2="16" y2="7"  stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="11" x2="14" y2="11" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
    </>
  ),
  flame: (
    <>
      <path d="M12 2C12 2 6 8 6 13a6 6 0 0 0 12 0c0-3-2-6-3-7.5 0 0-.5 3-2 4C13 9.5 12 2 12 2z" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M12 22c-2.5 0-4-1.5-4-3.5 0-1.5 1-2.5 2-3 0 1.5 1 2.5 2 2.5s2-1 2-2.5c1 .5 2 1.5 2 3 0 2-1.5 3.5-4 3.5z" stroke={G} strokeWidth="1.5" {...S}/>
    </>
  ),

  /* ── People / Community ── */
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke={G} strokeWidth="1.8" {...S}/>
      <circle cx="9" cy="7" r="4" stroke={G} strokeWidth="1.8"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7" r="4" stroke={G} strokeWidth="1.8"/>
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke={G} strokeWidth="1.8" {...S}/>
      <line x1="4" y1="22" x2="4" y2="15" stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  handshake: (
    <>
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),

  /* ── Education / Growth ── */
  grad: (
    <>
      <polygon points="12,2 22,8.5 12,15 2,8.5" stroke={G} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M6 11.5V17c0 0 2 3 6 3s6-3 6-3v-5.5" stroke={G} strokeWidth="1.8" {...S}/>
      <line x1="22" y1="8.5" x2="22" y2="15" stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke={G} strokeWidth="1.8" {...S}/>
      <line x1="8" y1="7"  x2="16" y2="7"  stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="11" x2="14" y2="11" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
    </>
  ),
  books: (
    <>
      <rect x="4"  y="15" width="16" height="6" rx="1.5" stroke={G} strokeWidth="1.7"/>
      <rect x="5"  y="9"  width="14" height="6" rx="1.5" stroke={G} strokeWidth="1.7"/>
      <rect x="6"  y="3"  width="12" height="6" rx="1.5" stroke={G} strokeWidth="1.7"/>
    </>
  ),
  headphones: (
    <>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M3 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" stroke={G} strokeWidth="1.7"/>
      <path d="M21 14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3z" stroke={G} strokeWidth="1.7"/>
    </>
  ),

  /* ── Media / Content ── */
  mic: (
    <>
      <rect x="9" y="2" width="6" height="11" rx="3" stroke={G} strokeWidth="1.8"/>
      <path d="M19 10a7 7 0 0 1-14 0" stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="12" y2="22" stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8"  y1="22" x2="16" y2="22" stroke={G} strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  newsletter: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={G} strokeWidth="1.8" {...S}/>
      <polyline points="22,6 12,13 2,6" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  pdf: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={G} strokeWidth="1.8" {...S}/>
      <polyline points="14,2 14,8 20,8" stroke={G} strokeWidth="1.8" {...S}/>
      <line x1="8"  y1="13" x2="16" y2="13" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8"  y1="17" x2="13" y2="17" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
    </>
  ),
  camera: (
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke={G} strokeWidth="1.8" {...S}/>
      <circle cx="12" cy="13" r="4" stroke={G} strokeWidth="1.7"/>
    </>
  ),

  /* ── World / Outreach ── */
  globe: (
    <>
      <circle cx="12" cy="12" r="9" stroke={G} strokeWidth="1.8"/>
      <line x1="3"  y1="12" x2="21" y2="12" stroke={G} strokeWidth="1.4"/>
      <line x1="12" y1="3"  x2="12" y2="21" stroke={G} strokeWidth="1.4"/>
      <path d="M5 7.5 Q12 10 19 7.5"  stroke={G} strokeWidth="1.3" fill="none"/>
      <path d="M5 16.5 Q12 14 19 16.5" stroke={G} strokeWidth="1.3" fill="none"/>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke={G} strokeWidth="1.4"/>
    </>
  ),
  heart: (
    <>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  tent: (
    <>
      <path d="M3 21L12 3l9 18H3z"  stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M9 21V12h6v9"         stroke={G} strokeWidth="1.7" {...S}/>
      <path d="M7 21l5-9 5 9"        stroke={G} strokeWidth="1.4" {...S}/>
    </>
  ),
  gift: (
    <>
      <polyline points="20,12 20,22 4,22 4,12" stroke={G} strokeWidth="1.8" {...S}/>
      <rect x="2" y="7" width="20" height="5" stroke={G} strokeWidth="1.8" {...S}/>
      <line x1="12" y1="22" x2="12" y2="7" stroke={G} strokeWidth="1.7"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke={G} strokeWidth="1.7" {...S}/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke={G} strokeWidth="1.7" {...S}/>
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" stroke={G} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="5" stroke={G} strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="1.5" fill={G}/>
    </>
  ),
  vision: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={G} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="3" stroke={G} strokeWidth="1.7"/>
    </>
  ),
  leaf: (
    <>
      <path d="M2 22c0 0 6-10 20-10C22 22 12 22 2 22z" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M22 12C12 12 6 18 2 22" stroke={G} strokeWidth="1.6" {...S}/>
    </>
  ),
  dove: (
    <>
      <path d="M12 4C8 4 4 7 4 11c0 2 1 4 3 5.5L12 20l5-3.5C19 15 20 13 20 11c0-4-4-7-8-7z" stroke={G} strokeWidth="1.8" {...S}/>
      <path d="M12 4V2M10 6L8 4M14 6l2-4" stroke={G} strokeWidth="1.5" {...S}/>
      <circle cx="10" cy="10" r="1" fill={G}/>
    </>
  ),
  church: (
    <>
      <path d="M5 21V9.5L12 4l7 5.5V21H5z" stroke={G} strokeWidth="1.8" {...S}/>
      <rect x="9" y="13" width="6" height="8" stroke={G} strokeWidth="1.7"/>
      <line x1="12" y1="1"  x2="12" y2="5" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <line x1="9"  y1="3"  x2="15" y2="3" stroke={G} strokeWidth="2" strokeLinecap="round"/>
    </>
  ),

  /* ── Support / Partnership ── */
  support: (
    <>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),
  star: (
    <>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke={G} strokeWidth="1.8" strokeLinejoin="round"/>
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={G} strokeWidth="1.8" {...S}/>
    </>
  ),

  /* ── Social ── */
  facebook: (
    <>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke={G} strokeWidth="1.7" {...S}/>
    </>
  ),
  twitter: (
    <>
      <path d="M4 4l16 16M20 4L4 20" stroke={G} strokeWidth="2.2" strokeLinecap="round"/>
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={G} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.5" stroke={G} strokeWidth="1.7"/>
      <circle cx="17.5" cy="6.5" r="1" fill={G}/>
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke={G} strokeWidth="1.7"/>
      <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill={G}/>
    </>
  ),

  /* ── Search / UI ── */
  search: (
    <>
      <circle cx="11" cy="11" r="7" stroke={G} strokeWidth="1.8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke={G} strokeWidth="2" strokeLinecap="round"/>
    </>
  ),
};

/**
 * IconRing — gold SVG icon inside a solid purple circle
 * size prop controls the outer circle diameter (default 48)
 */
export function IconRing({ name, size = 48, iconSize, bright = false }) {
  const iSize = iconSize || Math.round(size * 0.46);
  const circleSize = `${size}px`;
  const bg   = bright ? '#5a2db8' : '#3d2080';
  const glow = bright ? 'rgba(90,45,184,0.25)' : 'rgba(61,32,128,0.25)';

  return (
    <div style={{
      width:          circleSize,
      height:         circleSize,
      borderRadius:   '50%',
      background:     bg,
      border:         '1.5px solid rgba(201,168,76,0.28)',
      boxShadow:      `0 0 0 ${Math.round(size * 0.12)}px ${glow}`,
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      flexShrink:     0,
    }}>
      <Icon name={name} size={iSize} />
    </div>
  );
}

/**
 * Icon — bare SVG, no circle
 */
export function Icon({ name, size = 24 }) {
  if (!PATHS[name]) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {PATHS[name]}
    </svg>
  );
}

export default Icon;
