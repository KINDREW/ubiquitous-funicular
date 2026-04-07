import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',         to: '/'          },
  { label: 'About',        to: '/about'      },
  { label: 'Our Chapters', to: '/chapters'   },
  { label: 'Resources',    to: '/resources'  },
  { label: 'Events',       to: '/events'     },
  { label: 'Gallery',      to: '/gallery'    },
  { label: 'Contact',      to: '/contact'    },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>

          {/* Desktop links */}
          <div className="navbar__links">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${pathname === to ? 'nav-link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button size="sm">Join the Movement →</Button>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`mobile-menu__link ${pathname === to ? 'mobile-menu__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
            <Button size="lg">Join the Movement →</Button>
          </Link>
        </div>
      )}
    </>
  );
}
