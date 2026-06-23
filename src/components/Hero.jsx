export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-eyebrow">☕ Specialty Coffee · Downtown Portland</span>
        <h1>Where Every Cup<br />Tells a <em>Story</em></h1>
        <p>
          Ember & Oak is a neighbourhood café rooted in craft, warmth, and the
          quiet ritual of a perfectly pulled espresso. Come as you are.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">Explore the Menu</a>
          <a href="#about" className="btn-secondary">Our Story</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">12+</div>
          <div className="stat-label">Years Brewing</div>
        </div>
        <div className="stat">
          <div className="stat-num">6</div>
          <div className="stat-label">Origin Roasts</div>
        </div>
        <div className="stat">
          <div className="stat-num">4.9★</div>
          <div className="stat-label">Google Rating</div>
        </div>
      </div>
    </section>
  );
}
