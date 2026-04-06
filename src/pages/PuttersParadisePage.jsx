import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import './PuttersParadisePage.css';

const PRICING = [
  {
    title: 'Einzelticket',
    prices: [
      { amount: '7,00 €', unit: '/ Erwachsene' },
      { amount: '5,00 €', unit: '/ Kinder' },
    ],
    features: [
      'Eine Runde über 13 Bahnen',
      'Schläger & Ball inklusive',
      'Kinder bis 16 Jahre',
    ],
  },
  {
    title: 'Familienkarte',
    price: '20,00 €',
    unit: '/ 2 Erw. + 2 Kinder',
    features: [
      '2 Erwachsene + 2 Kinder: 20,00 €',
      '2 Erwachsene + 3 Kinder: 22,00 €',
      '2 Erwachsene + 4 Kinder: 25,00 €',
      'Komplette Ausrüstung inklusive',
    ],
    highlighted: true,
  },
  {
    title: 'Zehnerkarte & Extras',
    prices: [
      { amount: '60,00 €', unit: '/ 10er Erw.' },
      { amount: '35,00 €', unit: '/ 10er Kinder' },
    ],
    features: [
      'Wiederholungsrunde Erw.: 5,00 €',
      'Wiederholungsrunde Kinder: 3,50 €',
    ],
  },
];

const OPENING_HOURS = [
  { day: 'Montag – Freitag', time: '10:00 – 20:00 Uhr' },
  { day: 'Samstag', time: '10:00 – 20:00 Uhr' },
  { day: 'Sonntag', time: '10:00 – 20:00 Uhr' },
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
              <div className="putters-hours">
                {OPENING_HOURS.map((h) => (
                  <div key={h.day} className="putters-hours__row">
                    <span className="putters-hours__day">{h.day}</span>
                    <span className="putters-hours__time">{h.time}</span>
                  </div>
                ))}
                <div className="putters-hours__note">Letzter Einlass um 19:00 Uhr</div>
              </div>
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
            <span className="label">Eintrittspreise</span>
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
