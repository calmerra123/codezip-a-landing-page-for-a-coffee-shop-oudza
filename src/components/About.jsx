export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-images">
        <img
          className="about-img-main"
          src="https://images.unsplash.com/photo-1670404161009-29548c027d06?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwY2FyZWZ1bGx5JTIwcG91cmluZyUyMGxhdHRlJTIwYXJ0JTIwZXNwcmVzc298ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=800&h=600&fit=crop&crop=entropy&q=80&auto=format"
          alt="Barista crafting latte art"
        />
        <img
          className="about-img-accent"
          src="https://images.unsplash.com/photo-1573628684835-ca186702bbde?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29mZmVlJTIwcm9hc3RlciUyMGJlYW5zJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc4MjI1MDk3OXww&ixlib=rb-4.1.0&w=600&h=500&fit=crop&crop=entropy&q=80&auto=format"
          alt="Coffee roasting"
        />
      </div>
      <div className="about-text">
        <span className="about-tag">Our Story</span>
        <h2>Rooted in Craft,<br />Brewed with <em>Heart</em></h2>
        <p>
          Ember & Oak was born in 2012 from a converted Victorian corner store in
          Portland's Pearl District. Founders Nora Callahan and James Osei wanted a
          café that felt less like a pit stop and more like a living room — a place
          where the coffee never tastes rushed.
        </p>
        <p>
          We source our beans directly from small-lot farms in Ethiopia, Colombia,
          and Guatemala, roasting in-house every Tuesday and Friday so each cup is
          at peak freshness.
        </p>
        <div className="about-values">
          <div className="value-pill"><span className="icon">🌱</span> Direct Trade</div>
          <div className="value-pill"><span className="icon">🔥</span> In-House Roasting</div>
          <div className="value-pill"><span className="icon">♻️</span> Zero Waste</div>
        </div>
      </div>
    </section>
  );
}
