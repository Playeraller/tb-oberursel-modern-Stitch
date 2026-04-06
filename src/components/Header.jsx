import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { to: '/tennis', label: 'Tennis' },
    { to: '/badminton', label: 'Badminton' },
    { to: '/putters-paradise', label: "Putter's Paradise" },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" id="header-logo" onClick={() => setIsMenuOpen(false)}>
          <span className="header__logo-mark">TBO</span>
          <span className="header__logo-text">Tennis Badminton Oberursel</span>
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} id="main-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`header__link ${location.pathname === link.to ? 'header__link--active' : ''}`}
              id={`nav-${link.to.replace('/', '')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/tennis-booking" className="btn btn--primary header__cta" id="nav-booking-cta" onClick={() => setIsMenuOpen(false)}>
            Platz buchen
          </Link>
        </nav>

        <button
          className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü öffnen"
          id="burger-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
