import './Logo.css';

export default function Logo({ onClick, size = 'md' }) {
  return (
    <div className={`logo logo--${size}`} onClick={onClick} role="button" tabIndex={0}>
      <div className="logo__circle">RLW</div>
      <div>
        <div className="logo__name">RLW</div>
        <div className="logo__sub">Real Life World Inc.</div>
      </div>
    </div>
  );
}
