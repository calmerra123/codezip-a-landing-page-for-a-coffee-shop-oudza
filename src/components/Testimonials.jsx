const reviews = [
  {
    quote: 'The Cardamom Cortado changed my morning routine forever. I now wake up excited for the commute just to stop in here.',
    name: 'Priya Nair',
    title: 'Architect, Pearl District',
    avatar: 'https://images.unsplash.com/photo-1674278882093-3870ef98e826?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIweW91bmclMjBpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc4MjI1MDk3OXww&ixlib=rb-4.1.0&w=200&h=200&fit=crop&crop=entropy&q=80&auto=format',
    stars: 5,
  },
  {
    quote: "Best pour-over in Portland, no contest. The Colombian V60 is nuanced in a way that makes most café coffee taste like an afterthought.",
    name: 'Marcus Teller',
    title: 'Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1776217659293-99b03244039d?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsYWNrJTIwbWFuJTIwc21pbGluZyUyMG91dGRvb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODIyNTA5ODB8MA&ixlib=rb-4.1.0&w=200&h=200&fit=crop&crop=entropy&q=80&auto=format',
    stars: 5,
  },
  {
    quote: "Ember & Oak feels like a secret even when it's packed. The sourdough toast and a flat white is my idea of a perfect Saturday.",
    name: 'Sofia Lindqvist',
    title: 'Graphic Designer',
    avatar: 'https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxibG9uZGUlMjBzY2FuZGluYXZpYW4lMjB3b21hbiUyMHNtaWxpbmclMjB3YXJtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=200&h=200&fit=crop&crop=entropy&q=80&auto=format',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <p className="section-eyebrow">Guest Reviews</p>
        <h2>Heard from our Regulars</h2>
      </div>
      <div className="testimonials-grid">
        {reviews.map(r => (
          <div className="testimonial-card" key={r.name}>
            <div className="stars">{'★'.repeat(r.stars)}</div>
            <p className="testimonial-quote">"{r.quote}"</p>
            <div className="testimonial-author">
              <img className="author-avatar" src={r.avatar} alt={r.name} />
              <div>
                <div className="author-name">{r.name}</div>
                <div className="author-title">{r.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
