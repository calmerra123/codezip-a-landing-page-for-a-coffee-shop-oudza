import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">Avis<span>&</span>Coffe</div>
      <ul className="nav-links">
        <li><a href="#about">Our Story</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact" className="nav-cta">Visit Us</a></li>
      </ul>
      <div className="nav-hamburger">
        <span /><span /><span />
      </div>
    </nav>
  );
}
