import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import './HomePage.css';

const ACTIVITIES = [
  {
    title: 'Tennis',
    description: '6 Hallenplätze und 2 Außenplätze – für jedes Level die richtige Spielfläche.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
    to: '/tennis',
    label: '8 Plätze',
  },
  {
    title: 'Badminton',
    description: '4 professionelle Felder mit über 10m Deckenhöhe für maximale Spielfreiheit.',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
    to: '/badminton',
    label: '4 Felder',
  },
  {
    title: "Putter's Paradise",
    description: '13 kreative Bahnen für Familienspaß und Gruppen-Herausforderungen.',
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
            <span className="label">Unser Angebot</span>
            <h2>Finden Sie Ihren Sport</h2>
            <p>Von Tennis über Badminton bis hin zu Adventure-Golf – bei uns ist für jeden etwas dabei.</p>
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
              <span className="home-stat__number">8</span>
              <span className="home-stat__label">Tennisplätze</span>
            </div>
            <div className="home-stat">
              <span className="home-stat__number">4</span>
              <span className="home-stat__label">Badminton-Felder</span>
            </div>
            <div className="home-stat">
              <span className="home-stat__number">13</span>
              <span className="home-stat__label">Golf-Bahnen</span>
            </div>
            <div className="home-stat">
              <span className="home-stat__number">30+</span>
              <span className="home-stat__label">Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section home-cta" id="cta-section">
        <div className="container">
          <div className="home-cta__card">
            <h2>Werden Sie Teil der TBO-Familie</h2>
            <p>Erleben Sie erstklassige Sportanlagen, eine lebendige Gemeinschaft und unvergessliche Momente – direkt in Oberursel.</p>
            <div className="home-cta__actions">
              <Link to="/tennis-booking" className="btn btn--primary btn--large">
                Jetzt Platz buchen
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="tel:0617128454900" className="btn btn--outline btn--large">
                <span className="material-symbols-outlined">call</span>
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
