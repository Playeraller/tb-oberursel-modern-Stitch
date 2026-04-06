import './Hero.css';

export default function Hero({
  title,
  subtitle,
  label,
  backgroundImage,
  videoSrc,
  children,
  align = 'center',
  overlay = true,
  compact = false,
}) {
  return (
    <section
      className={`hero ${compact ? 'hero--compact' : ''} hero--${align}`}
      id="page-hero"
    >
      {/* Background Media */}
      <div className="hero__media">
        {videoSrc && (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundImage}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {!videoSrc && backgroundImage && (
          <img
            className="hero__image"
            src={backgroundImage}
            alt={title}
            loading="eager"
          />
        )}
        
        {!videoSrc && !backgroundImage && (
          <div className="hero__gradient" />
        )}

        {overlay && <div className="hero__overlay" />}
      </div>

      {/* Content */}
      <div className="hero__content container">
        {label && <span className="hero__label label">{label}</span>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children && <div className="hero__actions">{children}</div>}
      </div>
    </section>
  );
}
