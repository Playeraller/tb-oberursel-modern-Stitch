import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import './HomePage.css';

const ACTIVITIES = [
  {
    title: 'Tennis',
    description: '6 Hallenplätze mit gelenkschonendem Granulat und 2 Freiplätze – für Einsteiger und Vereinsspieler.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
    to: '/tennis',
    label: '8 Plätze',
  },
  {
    title: 'Badminton',
    description: '4 Badmintoncourts mit PVC-Schwingboden und über 10 m Deckenhöhe.',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
    to: '/badminton',
    label: '4 Courts',
  },
  {
    title: "Putter's Paradise",
    description: '13 Adventure-Golf-Bahnen durch Landschaften, über Brücken und durch Täler.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
    to: '/putters-paradise',
    label: '13 Bahnen',
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <Hero
        title="Willkommen beim TBO Oberursel"
        subtitle="Ihre Anlage für Tennis, Badminton und Minigolf – Sport und Gemeinschaft für die ganze Familie."
        videoSrc="/videos/home_hero_kinetic_macro.mp4"
        label="TENNIS BADMINTON OBERURSEL"
      >
        <Link to="/tennis" className="btn btn--primary btn--large">
          Unsere Sportarten
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
        <Link to="/tennis-booking" className="btn btn--white btn--large">
          Platz reservieren
        </Link>
      </Hero>

      {/* Activities Section */}
      <section className="section home-activities" id="activities-section">
        <div className="container">
          <div className="home-activities__header">
            <span className="label">Unsere Anlage</span>
            <h2>Sport für die ganze Familie</h2>
            <p>Tennis, Badminton oder Adventure Golf – auf unserer Anlage in Oberursel finden Sie den richtigen Sport.</p>
          </div>
          <div className="home-activities__grid">
            {ACTIVITIES.map((a) => (
              <ActivityCard key={a.to} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section--dark home-stats" id="stats-section">
        <div className="container">
          <div className="home-stats__grid">
            <div className="home-stat">
              <span className="home-stat__number">6</span>
              <span className="home-stat__label">Hallentennisplätze</span>
            </div>
            <div className="home-stat">
              <span className="home-stat__number">2</span>
              <span className="home-stat__label">Tennis-Freiplätze</span>
            </div>
            <div className="home-stat">
              <span className="home-stat__number">4</span>
              <span className="home-stat__label">Badmintoncourts</span>
            </div>
            <div className="home-stat">
              <span className="home-stat__number">13</span>
              <span className="home-stat__label">Adventure-Golf-Bahnen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gastronomie Teaser */}
      <section className="section home-gastro" id="gastro-section">
        <div className="container">
          <div className="home-cta__card">
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>restaurant</span>
            <h2>Nach dem Sport gut essen</h2>
            <p>Direkt auf unserer Anlage befindet sich die Pizzeria <strong>Casa Primavera</strong> – der perfekte Ort für einen entspannten Ausklang nach dem Spiel.</p>
            <div className="home-cta__actions">
              <a href="https://casa-primavera-oberursel.de" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
                Casa Primavera besuchen
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a href="tel:06171913535" className="btn btn--outline btn--large">
                <span className="material-symbols-outlined">call</span>
                06171 / 91 35 35
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
