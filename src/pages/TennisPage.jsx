import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './TennisPage.css';

const COURT_TYPES = [
  {
    icon: 'warehouse',
    title: 'Hallen-Hartplätze',
    count: '6',
    features: ['Klimatisierte Halle', 'LED-Turnier-Beleuchtung', 'Ganzjährig bespielbar'],
  },
  {
    icon: 'park',
    title: 'Sandplätze (Außen)',
    count: '2',
    features: ['Professionelle Platzpflege', 'Natürliches Spielgefühl', 'April – Oktober'],
  },
];

const PRICES = [
  { label: '', winter: 'Wintersaison', summer: 'Sommersaison' },
  { label: 'Hallen-Hartplatz (60 Min.)', winter: '22,00 €', summer: '18,00 €' },
  { label: 'Sandplatz Außen (60 Min.)', winter: '—', summer: '14,00 €' },
  { label: 'Flutlicht-Zuschlag', winter: '3,50 €', summer: '3,50 €' },
  { label: 'Saisonkarte Halle', winter: '890,00 €', summer: '—' },
  { label: 'Saisonkarte Außen', winter: '—', summer: '420,00 €' },
];

export default function TennisPage() {
  return (
    <div className="tennis-page">
      {/* Video Hero */}
      <Hero
        title="Tennis beim TBO – Sport und Spaß für die ganze Familie"
        subtitle="6 Hallenplätze mit gelenkschonendem Granulat und 2 gepflegte Sandplätze für den Sommer."
        label="TENNIS"
        videoSrc="/videos/tennis_hero_placeholder.mp4"
        backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&q=80"
        align="left"
      >
        <Link to="/tennis-booking" className="btn btn--primary btn--large">
          Platz reservieren
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </Hero>

      {/* Court Types */}
      <section className="section tennis-courts" id="court-types">
        <div className="container">
          <div className="tennis-courts__header">
            <span className="label">Unsere Plätze</span>
            <h2>Die richtige Fläche für Ihr Spiel</h2>
          </div>
          <div className="tennis-courts__grid">
            {COURT_TYPES.map((court) => (
              <div key={court.title} className="court-card">
                <div className="court-card__icon-wrap">
                  <span className="material-symbols-outlined court-card__icon">{court.icon}</span>
                </div>
                <div className="court-card__count">{court.count}</div>
                <h3 className="court-card__title">{court.title}</h3>
                <ul className="court-card__features">
                  {court.features.map((f) => (
                    <li key={f}>
                      <span className="material-symbols-outlined">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section section--alt tennis-pricing" id="tennis-pricing">
        <div className="container">
          <div className="tennis-pricing__header">
            <span className="label">Preise</span>
            <h2>Saisonbezogene Tarife</h2>
            <p>Faire Preise für 60-Minuten-Einheiten. Saisonkarten für Vielspieler verfügbar.</p>
          </div>
          <div className="tennis-pricing__table-wrap">
            <table className="tennis-pricing__table" id="price-table">
              <thead>
                <tr>
                  {PRICES[0] && (
                    <>
                      <th></th>
                      <th>{PRICES[0].winter}</th>
                      <th>{PRICES[0].summer}</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {PRICES.slice(1).map((row, i) => (
                  <tr key={i}>
                    <td className="tennis-pricing__label">{row.label}</td>
                    <td>{row.winter}</td>
                    <td>{row.summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark tennis-cta" id="tennis-cta">
        <div className="container">
          <div className="tennis-cta__content">
            <h2>Verbessern Sie Ihr Spiel noch heute</h2>
            <p>Reservieren Sie Ihren Wunschplatz in wenigen Klicks – online und unkompliziert.</p>
            <Link to="/tennis-booking" className="btn btn--primary btn--large">
              Jetzt buchen
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
