import './PricingCard.css';

export default function PricingCard({ title, price, unit, features, highlighted, children }) {
  return (
    <div className={`pricing-card ${highlighted ? 'pricing-card--highlighted' : ''}`}>
      {highlighted && <span className="pricing-card__badge">Empfohlen</span>}
      <h4 className="pricing-card__title">{title}</h4>
      {price && (
        <div className="pricing-card__price">
          <span className="pricing-card__amount">{price}</span>
          {unit && <span className="pricing-card__unit">{unit}</span>}
        </div>
      )}
      {features && features.length > 0 && (
        <ul className="pricing-card__features">
          {features.map((f, i) => (
            <li key={i} className="pricing-card__feature">
              <span className="material-symbols-outlined pricing-card__check">check_circle</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      {children && <div className="pricing-card__footer">{children}</div>}
    </div>
  );
}
