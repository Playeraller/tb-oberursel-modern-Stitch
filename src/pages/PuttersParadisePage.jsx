import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import './PuttersParadisePage.css';

const PRICING = [
  {
    title: 'Normaltarif',
    price: '9,50 €',
    unit: '/ Person',
    features: ['Einzelne Runde über 13 Löcher', 'Schläger & Ball inklusive', 'Keine Zeitbegrenzung'],
  },
  {
    title: 'Familien-Paket',
    price: '32,00 €',
    unit: '/ Paket',
    features: ['2 Erwachsene + 2 Kinder', 'Komplette Ausrüstung', 'Souvenir-Scorecard', '10% Rabatt an der Snack Bar', 'Jedes weitere Kind: +6 €'],
    highlighted: true,
  },
  {
    title: 'Große Gruppen',
    price: '7,50 €',
    unit: '/ Person',
    features: ['Teams ab 10 Personen', 'Reservierte Startzeiten', 'Turnierbegleitung', 'Getränkegutschein inklusive'],
  },
];

export default function PuttersParadisePage() {
  return (
    <div className="putters-page">
      {/* Hero */}
      <Hero
        title="Minigolf beim TBO"
        subtitle="13 kreative Bahnen im Grünen – ein entspannter Spaß für Familien, Freunde und Gruppen."
        label="ABENTEUER UND SPASS"
        backgroundImage="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600&q=80"
        videoSrc="/videos/putters_hero_placeholder.mp4"
      >
        <a href="#pricing" className="btn btn--primary btn--large">
          Preise ansehen
          <span className="material-symbols-outlined">arrow_downward</span>
        </a>
      </Hero>

      {/* Info Section */}
      <section className="section putters-info" id="putters-info">
        <div className="container">
          <div className="putters-info__grid">
            <div className="putters-info__card">
              <span className="material-symbols-outlined">nature</span>
              <h3>Von der Natur inspiriert</h3>
              <p>Navigieren Sie durch Wasserhindernisse und über Steinbrücken – jede Bahn erzählt ihre eigene Geschichte.</p>
            </div>
            <div className="putters-info__card">
              <span className="material-symbols-outlined">schedule</span>
              <h3>Heute geöffnet</h3>
              <p>Letzter Einlass 1 Stunde vor Schließung. Saisonale Öffnungszeiten – kontaktieren Sie uns für Details.</p>
            </div>
            <div className="putters-info__card">
              <span className="material-symbols-outlined">celebration</span>
              <h3>Events & Feiern</h3>
              <p>Feiern Sie Ihre nächste Party im Paradies – Geburtstage, Teamevents und mehr.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section--alt putters-pricing" id="pricing">
        <div className="container">
          <div className="putters-pricing__header">
            <span className="label">Preise</span>
            <h2>Wählen Sie Ihre Runde</h2>
          </div>
          <div className="putters-pricing__grid">
            {PRICING.map((p) => (
              <PricingCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Section */}
      <section className="section putters-birthday" id="birthday-section">
        <div className="container">
          <div className="putters-birthday__content">
            <span className="label">Kindergeburtstage</span>
            <h2>Unvergessliche Geburtstagsfeiern</h2>
            <p>Machen Sie den Ehrentag Ihres Kindes zu etwas Besonderem mit einer privaten Golfrunde, dekorierten Tischen und köstlichem Catering in unserem schönen Garten.</p>
            <div className="putters-birthday__features">
              <div className="putters-birthday__feature">
                <span className="material-symbols-outlined">cake</span>
                <strong>Kuchen & Deko</strong>
                <span>Wir kümmern uns um alles</span>
              </div>
              <div className="putters-birthday__feature">
                <span className="material-symbols-outlined">emoji_events</span>
                <strong>Pokal</strong>
                <span>Für das Geburtstagskind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section section--dark putters-testimonial" id="testimonial">
        <div className="container">
          <div className="putters-testimonial__content">
            <span className="material-symbols-outlined putters-testimonial__icon">format_quote</span>
            <blockquote>
              „Das beste Minigolf in der Region. Die Bahnen sind anspruchsvoll, aber fair, und die Atmosphäre ist einfach unglaublich!"
            </blockquote>
            <span className="putters-testimonial__author">– Begeisterter Besucher</span>
          </div>
        </div>
      </section>
    </div>
  );
}
