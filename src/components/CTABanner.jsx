import { Link } from 'react-router-dom';
import Button from './Button';
import './CTABanner.css';

export default function CTABanner({ label, title, subtitle, btnText, to = '/contact' }) {
  return (
    <div className="cta-banner">
      <div className="cta-banner__glow" />
      <div className="cta-banner__body">
        {label && <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>{label}</span>}
        <h2 className="cta-banner__title">{title}</h2>
        {subtitle && <p className="cta-banner__sub">{subtitle}</p>}
        <Link to={to} style={{ textDecoration: 'none' }}>
          <Button size="lg">{btnText} →</Button>
        </Link>
      </div>
    </div>
  );
}
