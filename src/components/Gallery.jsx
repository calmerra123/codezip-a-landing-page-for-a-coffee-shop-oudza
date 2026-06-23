const photos = [
  { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY296eSUyMGludGVyaW9yJTIwd29vZGVuJTIwdGFibGVzJTIwcGxhbnRzfGVufDF8fHx8MTc4MjI1MDk3OXww&ixlib=rb-4.1.0&w=900&h=600&fit=crop&crop=entropy&q=80&auto=format',  alt: 'Café interior', cls: 'tall' },
  { src: 'https://loremflickr.com/600/400/latte%2Cart?lock=1',               alt: 'Latte art' },
  { src: 'https://images.unsplash.com/photo-1620807773206-49c1f2957417?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBzdGVhbSUyMHBvcnRhZmlsdGVyJTIwYmFyaXN0YXxlbnwxfHx8fDE3ODIyNTA5Nzl8MA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',    alt: 'Espresso machine' },
  { src: 'https://images.unsplash.com/photo-1624976921221-4478954a4bc9?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nJTIwdHJheSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=800&h=500&fit=crop&crop=entropy&q=80&auto=format',           alt: 'Roasting', cls: 'span2' },
  { src: 'https://images.unsplash.com/photo-1677763914692-a64cd3df92a0?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMHdpbmRvdyUyMHNlYXQlMjBib29rcyUyMGNvZmZlZSUyMG11Z3xlbnwxfHx8fDE3ODIyNTA5Nzl8MA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',        alt: 'Window seat' },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <p className="section-eyebrow" style={{ color: 'var(--caramel)' }}>Instagram-worthy Moments</p>
        <h2>Life at Ember & Oak</h2>
      </div>
      <div className="gallery-grid">
        {photos.map(p => (
          <div key={p.src} className={`gallery-item${p.cls ? ' ' + p.cls : ''}`}>
            <img src={p.src} alt={p.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
