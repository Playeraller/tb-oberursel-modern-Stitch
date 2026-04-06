import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import './BadmintonPage.css';

const STATS = [
  { number: '04', label: 'Badmintoncourts', icon: 'grid_view' },
  { number: 'LED', label: 'Helles Licht', icon: 'lightbulb' },
  { number: 'PVC', label: 'Schwingboden', icon: 'layers' },
];

const PRICING = [
  {
    title: 'Vormittags',
    price: '13,75 €',
    unit: '/ 60 Min.',
    features: ['Mo – Fr, 8:00 – 12:00', 'Alle 4 Courts', 'Ideal für Senioren & Frühsportler'],
  },
  {
    title: 'Abends & Wochenende',
    price: '15,50 €',
    unit: '/ 60 Min.',
    features: ['Mo – Fr ab 17:00', 'Sa & So ganztags', 'Beliebteste Spielzeiten'],
    highlighted: true,
  },
  {
    title: 'Doppelstunde',
    price: '27,50 €',
    unit: '/ 120 Min.',
    features: ['Jederzeit verfügbar', '10 % Ersparnis', 'Ideal für längere Trainingseinheiten'],
  },
];

export default function BadmintonPage() {
  return (
    <div className="badminton-page">
      {/* Hero */}
      <Hero
        title="Badminton beim TBO"
        subtitle="4 Badmintoncourts mit PVC-Schwingboden und modernster LED-Beleuchtung – ganzjährig bespielbar."
        label="BADMINTON"
        backgroundImage="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1600&q=80"
        videoSrc="/videos/badminton_hero_placeholder.mp4"
        align="left"
      >
        <Link to="/badminton-booking" className="btn btn--primary btn--large">
          Court reservieren
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </Hero>

      {/* Stats */}
      <section className="section badminton-stats" id="badminton-stats">
        <div className="container">
          <div className="badminton-stats__grid">
            {STATS.map((s) => (
              <div key={s.label} className="badminton-stat">
                <span className="material-symbols-outlined badminton-stat__icon">{s.icon}</span>
                <span className="badminton-stat__number">{s.number}</span>
                <span className="badminton-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section--alt badminton-pricing" id="badminton-pricing">
        <div className="container">
          <div className="badminton-pricing__header">
            <span className="label">Preise</span>
            <h2>Wählen Sie Ihre Spielzeit</h2>
          </div>
          <div className="badminton-pricing__grid">
            {PRICING.map((p) => (
              <PricingCard key={p.title} {...p}>
                <Link to="/badminton-booking" className="btn btn--primary">
                  Buchen
                </Link>
              </PricingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Badminton */}
      <section className="section badminton-why" id="why-badminton">
        <div className="container">
          <div className="badminton-why__content">
            <span className="label">Warum Badminton?</span>
            <h2>Schnell, vielseitig und für jedes Alter</h2>
            <p>Badminton verbindet Bewegung, Reaktionsvermögen und jede Menge Spaß – ob im Einzel oder Doppel. Unsere Courts mit PVC-Schwingboden sind gelenkschonend und bieten bei jedem Wetter beste Spielbedingungen.</p>
            <div className="badminton-why__features">
              <div className="badminton-why__feature">
                <span className="material-symbols-outlined">local_fire_department</span>
                <strong>450+ kcal/h</strong>
                <span>Kalorienverbrauch</span>
              </div>
              <div className="badminton-why__feature">
                <span className="material-symbols-outlined">self_improvement</span>
                <strong>Stressabbau</strong>
                <span>Kopf frei bekommen</span>
              </div>
              <div className="badminton-why__feature">
                <span className="material-symbols-outlined">groups</span>
                <strong>2–4 Spieler</strong>
                <span>Einzel & Doppel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
