import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Icon, IconRing } from './Icons';
import './Footer.css';

const QUICK_LINKS = [
  ['/', 'Home'], ['/about', 'About'], ['/chapters', 'Our Chapters'],
  ['/resources', 'Resources'], ['/events', 'Events'],
  ['/gallery', 'Gallery'], ['/contact', 'Contact'],
];

const CONTACT = [
  { iconName: 'mail',  text: 'reallifeworld2015@gmail.com' },
  { iconName: 'phone', text: '+233 50 132 6651\n+233 24 797 8169' },
];

const SOCIAL = [
  { iconName: 'facebook',  label: 'Facebook'  },
  { iconName: 'twitter',   label: 'X/Twitter' },
  { iconName: 'instagram', label: 'Instagram' },
  { iconName: 'youtube',   label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Logo />
            </Link>
            <p className="footer__tagline">
              Revealing the reality of the Christ-Life and raising people to live
              according to the revelation of God.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__link-grid">
              {QUICK_LINKS.map(([to, label]) => (
                <Link key={to} to={to} className="footer-link">{label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Contact</h4>
            {CONTACT.map((c, i) => (
              <div key={i} className="footer__contact-item">
                {/* Small icon ring matching page icons */}
                <div className="footer__contact-icon-ring">
                  <Icon name={c.iconName} size={13} />
                </div>
                <span className="footer__contact-text">{c.text}</span>
              </div>
            ))}
          </div>

          {/* Follow */}
          <div>
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__socials">
              {SOCIAL.map((s) => (
                <button key={s.label} className="footer__social-btn" title={s.label}>
                  <Icon name={s.iconName} size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© Real Life World Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
