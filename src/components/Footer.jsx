import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/logo.png" alt="TBO Logo" className="footer__logo-img" />
            </Link>
            <p className="footer__desc">
              Tennis Badminton Oberursel – Ihre Anlage für Sport und Spaß in Oberursel.
            </p>
          </div>

          {/* Sport Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Sport</h4>
            <Link to="/tennis" className="footer__link" id="footer-tennis">Tennis</Link>
            <Link to="/badminton" className="footer__link" id="footer-badminton">Badminton</Link>
            <Link to="/putters-paradise" className="footer__link" id="footer-putters">Putter's Paradise</Link>
            <a href="https://casa-primavera-oberursel.de" target="_blank" rel="noopener noreferrer" className="footer__link" id="footer-gastro">Casa Primavera</a>
          </div>

          {/* Buchung Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Buchung</h4>
            <Link to="/tennis-booking" className="footer__link" id="footer-tennis-book">Tennis buchen</Link>
            <Link to="/badminton-booking" className="footer__link" id="footer-badminton-book">Badminton buchen</Link>
          </div>

          {/* Kontakt */}
          <div className="footer__col">
            <h4 className="footer__heading">Kontakt</h4>
            <p className="footer__contact">
              <span className="material-symbols-outlined">location_on</span>
              Oberstedter Str. 41–43, 61440 Oberursel
            </p>
            <p className="footer__contact">
              <span className="material-symbols-outlined">call</span>
              06171 / 91 35 35
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Tennis Badminton Oberursel. Alle Rechte vorbehalten.</p>
          <div className="footer__legal">
            <a href="#" className="footer__link" id="footer-impressum">Impressum</a>
            <a href="#" className="footer__link" id="footer-datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
