import { useState } from 'react';

const menuData = {
  Espresso: [
    {
      name: 'Single Origin Espresso',
      desc: 'Ethiopian Yirgacheffe, notes of bergamot and dark cherry.',
      price: '$4.50',
      badge: 'Signature',
      img: 'https://loremflickr.com/600/400/single%2Corigin?lock=1',
    },
    {
      name: 'Ember Flat White',
      desc: 'Double ristretto with silky micro-foam whole milk.',
      price: '$5.25',
      badge: 'Fan Fav',
      img: 'https://images.unsplash.com/photo-1545731939-9c302d5d27ed?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxmbGF0JTIwd2hpdGUlMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydCUyMHRvcCUyMHZpZXd8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Cardamom Cortado',
      desc: 'Espresso pulled over house-made cardamom syrup, equal milk.',
      price: '$5.75',
      badge: 'House Special',
      img: 'https://images.unsplash.com/photo-1511495069777-323685717483?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjb3J0YWRvJTIwZXNwcmVzc28lMjBzbWFsbCUyMGdsYXNzJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3ODIyNTA5Nzl8MA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Cold Brew Tonic',
      desc: '18-hour cold brew over sparkling tonic with a citrus peel.',
      price: '$6.00',
      badge: 'Seasonal',
      img: 'https://images.unsplash.com/photo-1595461039513-726bc2bbadf8?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZSUyMHRvbmljJTIwZ2xhc3MlMjBpY2UlMjBjaXRydXN8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
  ],
  'Pour-Over': [
    {
      name: 'Hario V60 — Colombia',
      desc: 'Huila single-farm, notes of red apple and milk chocolate.',
      price: '$6.50',
      badge: 'Pour-Over',
      img: 'https://images.unsplash.com/photo-1595827295672-97a059484442?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxWNjAlMjBwb3VyJTIwb3ZlciUyMGNvZmZlZSUyMGRyaXBwZXIlMjBsaWdodCUyMHdvb2R8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Chemex — Guatemala',
      desc: 'Antigua Bourbon, bright citrus acidity, clean finish.',
      price: '$6.50',
      badge: 'Pour-Over',
      img: 'https://images.unsplash.com/photo-1764555470026-68c2bd8e200e?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjaGVtZXglMjBwb3VyJTIwb3ZlciUyMGNvZmZlZSUyMGJyZXdpbmclMjBjYWZlfGVufDF8fHx8MTc4MjI1MDk3OXww&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Aeropress — Ethiopia',
      desc: 'Heirloom natural process, blueberry jam and jasmine notes.',
      price: '$5.50',
      badge: 'Staff Pick',
      img: 'https://loremflickr.com/600/400/aeropress%2Ccoffee?lock=1',
    },
    {
      name: 'Cold Drip Tower',
      desc: 'Slow-dripped 8 hrs, silky body, zero bitterness.',
      price: '$7.00',
      badge: 'Rare',
      img: 'https://images.unsplash.com/photo-1550249825-672da2a75487?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxjb2xkJTIwZHJpcCUyMHRvd2VyJTIwY29mZmVlJTIwYXBwYXJhdHVzJTIwZ2xhc3N8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
  ],
  Bites: [
    {
      name: 'Brown Butter Croissant',
      desc: 'Laminated in-house, filled with brown butter frangipane.',
      price: '$4.75',
      badge: 'Bakery',
      img: 'https://images.unsplash.com/photo-1571157577110-493b325fdd3d?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxmbGFreSUyMGdvbGRlbiUyMGNyb2lzc2FudCUyMHBhc3RyeSUyMGNsb3NlJTIwdXAlMjBiYWtlcnl8ZW58MXx8fHwxNzgyMjUwOTgwfDA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Oat & Tahini Cookie',
      desc: 'Chewy, nutty, and just sweet enough — vegan & gluten-free.',
      price: '$3.50',
      badge: 'Vegan',
      img: 'https://images.unsplash.com/photo-1765100214310-81fb4c062b25?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxvYXQlMjB0YWhpbmklMjBjb29raWUlMjBoZWFsdGh5JTIwYmFrZXJ5JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3ODIyNTA5Nzl8MA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Avocado Sourdough Toast',
      desc: 'Local bakery sourdough, smashed avo, chilli flake, lemon.',
      price: '$9.00',
      badge: 'Brunch',
      img: 'https://images.unsplash.com/photo-1623691751128-ade6f7e59003?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBzb3VyZG91Z2glMjBicnVuY2glMjBjYWZlJTIwdGFibGV8ZW58MXx8fHwxNzgyMjUwOTc5fDA&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
    {
      name: 'Ricotta Jar Cheesecake',
      desc: 'Light baked ricotta, honeycomb, seasonal berry compote.',
      price: '$7.50',
      badge: 'Dessert',
      img: 'https://images.unsplash.com/photo-1600383708782-42a91f5ac449?ixid=M3w5ODEwOTF8MHwxfHNlYXJjaHwxfHxtaW5pJTIwY2hlZXNlY2FrZSUyMGphciUyMHJpY290dGElMjBiZXJyeSUyMGNhZmUlMjBkZXNzZXJ0fGVufDF8fHx8MTc4MjI1MDk3OXww&ixlib=rb-4.1.0&w=600&h=400&fit=crop&crop=entropy&q=80&auto=format',
    },
  ],
};

export default function Menu() {
  const [active, setActive] = useState('Espresso');
  const items = menuData[active];

  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <p className="section-eyebrow">Seasonal Menu</p>
        <h2>Crafted With Intention</h2>
      </div>
      <div className="menu-tabs">
        {Object.keys(menuData).map(tab => (
          <button
            key={tab}
            className={`tab-btn${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {items.map(item => (
          <div className="menu-card" key={item.name}>
            <img className="menu-card-img" src={item.img} alt={item.name} />
            <div className="menu-card-body">
              <div className="menu-card-name">{item.name}</div>
              <div className="menu-card-desc">{item.desc}</div>
              <div className="menu-card-footer">
                <span className="menu-card-price">{item.price}</span>
                <span className="menu-card-badge">{item.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
