import './styles.css';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}
