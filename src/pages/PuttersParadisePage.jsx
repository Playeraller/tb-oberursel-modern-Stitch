import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import './PuttersParadisePage.css';

const PRICING = [
  {
    title: 'Normaltarif',
    price: '9,50 €',
    unit: '/ Person',
    features: ['Eine Runde über 13 Bahnen', 'Schläger & Ball inklusive', 'Keine Zeitbegrenzung'],
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
        title="Der große Adventure-Minigolf-Spaß für alle"
        subtitle="13 abwechslungsreiche Bahnen voller Hindernisse und Überraschungen"
        label="ADVENTURE GOLF"
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
              <span className="material-symbols-outlined">landscape</span>
              <h3>Abenteuer auf Kunstrasen</h3>
              <p>Spiele dich durch Tunnel, über Brücken und um Wasserhindernisse.</p>
            </div>
            <div className="putters-info__card">
              <span className="material-symbols-outlined">schedule</span>
              <h3>Öffnungszeiten</h3>
              <p>Saisonabhängig geöffnet. Letzter Einlass 1 Stunde vor Schließung – rufen Sie uns gerne an für aktuelle Zeiten.</p>
            </div>
            <div className="putters-info__card">
              <span className="material-symbols-outlined">celebration</span>
              <h3>Events & Feiern</h3>
              <p>Ideal für Ausflüge mit Freunden oder der Familie. Einfach vorbeikommen und loslegen.</p>
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

      {/* Testimonial */}
      <section className="section section--dark putters-testimonial" id="testimonial">
        <div className="container">
          <div className="putters-testimonial__content">
            <span className="material-symbols-outlined putters-testimonial__icon">format_quote</span>
            <blockquote>
              „Tolles Adventure Golf! Die Bahnen sind abwechslungsreich und machen sowohl Kindern als auch Erwachsenen richtig Spaß.&quot;
            </blockquote>
            <span className="putters-testimonial__author">– Familie aus Oberursel</span>
          </div>
        </div>
      </section>
    </div>
  );
}
