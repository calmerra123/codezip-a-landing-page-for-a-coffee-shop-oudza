export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div>
          <div className="footer-brand-name">Avis<span>&</span>Coffe</div>
          <p className="footer-desc">
            A craft coffee house in Portland's Pearl District. Open daily from
            7 am until the last cup is poured.
          </p>
          <div className="footer-social">
            <div className="social-btn" title="Instagram">📷</div>
            <div className="social-btn" title="Twitter">🐦</div>
            <div className="social-btn" title="Facebook">👥</div>
          </div>
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <ul>
            <li><a href="#">124 NW 11th Ave</a></li>
            <li><a href="#">Portland, OR 97209</a></li>
            <li><a href="#">(503) 555-0182</a></li>
            <li><a href="#">hello@aviscoffe.co</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <ul>
            <li><a href="#">Mon–Fri · 7am–7pm</a></li>
            <li><a href="#">Saturday · 8am–8pm</a></li>
            <li><a href="#">Sunday · 9am–5pm</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#">Wholesale Beans</a></li>
            <li><a href="#">Private Events</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Avis Coffe Coffee. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  );
}
