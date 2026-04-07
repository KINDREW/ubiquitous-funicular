import './PageHero.css';

export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow1" />
      <div className="page-hero__glow2" />
      <div className="container-wide page-hero__content fade-up">
        {label && <span className="section-label">{label}</span>}
        <h1
          className="page-hero__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
