import { Link } from 'react-router-dom';
import './ActivityCard.css';

export default function ActivityCard({ title, description, image, to, label }) {
  return (
    <Link to={to} className="activity-card" id={`activity-${to.replace('/', '')}`}>
      <div className="activity-card__image-wrap">
        <img src={image} alt={title} className="activity-card__image" loading="lazy" />
        <div className="activity-card__image-overlay" />
      </div>
      <div className="activity-card__body">
        {label && <span className="label">{label}</span>}
        <h3 className="activity-card__title">{title}</h3>
        <p className="activity-card__desc">{description}</p>
        <span className="activity-card__arrow">
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}
