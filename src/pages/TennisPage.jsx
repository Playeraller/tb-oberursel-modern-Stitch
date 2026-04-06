import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './TennisPage.css';

const COURT_TYPES = [
  {
    icon: 'warehouse',
    title: 'Hallentennisplätze',
    count: '6',
    features: ['Gelenkschonender & rückenfreundlicher Granulatbelag', 'Ganzjährig bespielbar', 'LED-Beleuchtung'],
  },
  {
    icon: 'park',
    title: 'Freiplätze',
    count: '2',
    features: ['Spielen an der frischen Luft', 'Optimale Lichtverhältnisse', 'April – Oktober'],
  },
];

const PRICES = [
  { label: '', winter: 'Wintersaison', summer: 'Sommersaison' },
  { label: 'Hallentennisplatz (60 Min.)', winter: '22,00 €', summer: '18,00 €' },
  { label: 'Freiplatz (60 Min.)', winter: '—', summer: '14,00 €' },
  { label: 'Flutlicht-Zuschlag', winter: '3,50 €', summer: '3,50 €' },
  { label: 'Abo Halle (32 Wo.)', winter: '890,00 €', summer: '—' },
  { label: 'Abo Freiplatz (20 Wo.)', winter: '—', summer: '420,00 €' },
];

const SPARSTUNDEN = [
  { label: 'Frühaufsteher', zeit: 'Mo – Fr, 7:00 – 9:00', rabatt: '–20 %' },
  { label: 'Nachtschwärmer', zeit: 'Mo – Do, 21:00 – 23:00', rabatt: '–20 %' },
];

export default function TennisPage() {
  return (
    <div className="tennis-page">
      {/* Video Hero */}
      <Hero
        title="Tennis beim TBO"
        subtitle="6 Hallentennisplätze mit gelenkschonendem Granulatbelag und 2 gepflegte Freiplätze für den Sommer."
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
            <h2>Unsere Tarife</h2>
            <p>Einzelpreise pro Stunde und Abo-Angebote für Vielspieler – fair und transparent.</p>
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

      {/* Sparstunden */}
      <section className="section tennis-sparstunden" id="tennis-sparstunden">
        <div className="container">
          <div className="tennis-pricing__header">
            <span className="label">Tipp</span>
            <h2>Sparstunden für Frühaufsteher & Nachtschwärmer</h2>
            <p>Außerhalb der Hauptzeiten spielen Sie bei uns zum reduzierten Preis.</p>
          </div>
          <div className="tennis-pricing__table-wrap">
            <table className="tennis-pricing__table" id="sparstunden-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Zeitfenster</th>
                  <th>Ersparnis</th>
                </tr>
              </thead>
              <tbody>
                {SPARSTUNDEN.map((row, i) => (
                  <tr key={i}>
                    <td className="tennis-pricing__label">{row.label}</td>
                    <td>{row.zeit}</td>
                    <td>{row.rabatt}</td>
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
            <h2>Lust auf eine Runde Tennis?</h2>
            <p>Reservieren Sie Ihren Wunschplatz bequem online – oder rufen Sie uns an.</p>
            <Link to="/tennis-booking" className="btn btn--primary btn--large">
              Platz reservieren
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
