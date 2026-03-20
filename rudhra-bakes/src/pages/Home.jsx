import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const highlights = [
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20 7 9 18l-5-5" />
          <path d="M20 12 9 23l-5-5" />
        </svg>
      ),
      title: 'Freshly Prepared Every Hour',
      description: 'Small-batch baking and quick kitchen prep keep each order warm, crisp, and full of flavor.',
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Open 24/7 for Real Cravings',
      description: 'From early breakfasts to midnight bites, your favorite bakery comfort food is always available.',
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M21 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1" />
          <path d="M7 11h10" />
          <path d="m12 16 5-5-5-5" />
        </svg>
      ),
      title: 'Fast Pickup, Friendly Pricing',
      description: 'Value-packed menu options from Rs.15 with quick turnaround for students, families, and office-goers.',
    },
  ];

  const popularItems = [
    {
      name: 'Signature Chocolate Truffle',
      description: 'Rich layered chocolate cake finished with silky ganache.',
      price: 'From Rs.75',
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=420&fit=crop',
    },
    {
      name: 'Crispy Veg Puff',
      description: 'Golden flaky pastry with spicy potato filling, served hot.',
      price: 'From Rs.20',
      tag: 'Most Ordered',
      image: 'https://images.unsplash.com/photo-1627308595171-d1b5d0f8f7f4?w=600&h=420&fit=crop',
    },
    {
      name: 'Authentic Filter Coffee',
      description: 'Strong South Indian brew for the perfect anytime refresh.',
      price: 'From Rs.25',
      tag: 'Local Favorite',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=420&fit=crop',
    },
  ];

  const quickLinks = [
    {
      to: '/menu',
      title: 'Explore Full Menu',
      description: 'Cakes, snacks, pizza, burgers, and beverages in one place.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      ),
    },
    {
      to: '/gallery',
      title: 'View Food Gallery',
      description: 'See the look and feel of our most loved dishes and bakery setup.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    },
    {
      to: '/reviews',
      title: 'Read Real Reviews',
      description: 'See why local customers keep coming back to Rudhra Bakes.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      to: '/contact',
      title: 'Get Directions',
      description: 'Find us opposite Sakthi Engineering College in Coimbatore.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=2000&h=1300&fit=crop"
            alt="Warm premium bakery ambience"
            className="hero__bg-image"
          />
          <div className="hero__bg-overlay"></div>
        </div>

        <div className="container hero__container">
          <div className="hero__content">
            <span className="hero__badge badge badge-live">Open Now • 24/7 Service</span>
            <h1 className="hero__title">
              Fresh Bakes, Snacks, and Coffee
              <span className="text-gradient"> Anytime You Need Comfort.</span>
            </h1>
            <p className="hero__subtitle">
              Trusted by local families and students in Coimbatore for quick service, affordable prices, and consistently fresh taste from morning to midnight.
            </p>

            <div className="hero__ctas">
              <a href="tel:+918778873773" className="btn btn-primary btn-lg">
                Call to Order
              </a>
              <Link to="/menu" className="btn btn-outline btn-lg">
                View Menu
              </Link>
              <a
                href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-highlight btn-lg"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="hero__trust">
              <div className="hero__trust-item">
                <strong>4.1★</strong>
                <span>Google rating</span>
              </div>
              <div className="hero__trust-item">
                <strong>200+</strong>
                <span>customer reviews</span>
              </div>
              <div className="hero__trust-item">
                <strong>Popular</strong>
                <span>Veg Puff • Filter Coffee</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image hero__image--main">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&h=900&fit=crop"
                alt="Premium bakery counter with fresh baked goods"
              />
            </div>
            <div className="hero__image hero__image--secondary">
              <img
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=420&h=420&fit=crop"
                alt="Freshly baked pastry"
              />
            </div>
            <div className="hero__floating-card glass-card animate-float">
              <span className="hero__floating-label">Fast Fulfillment</span>
              <strong>Most orders ready in 15-20 mins</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Built Around Taste, Speed, and Trust</h2>
            <p className="section-subtitle">
              Every experience at Rudhra Bakes is designed to make your day easier and more delicious.
            </p>
          </div>

          <div className="highlights__grid">
            {highlights.map((item) => (
              <article key={item.title} className="highlight glass-card">
                <div className="highlight__icon">{item.icon}</div>
                <h3 className="highlight__title">{item.title}</h3>
                <p className="highlight__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-popular section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Popular Picks</span>
            <h2 className="section-title">Customer Favorites You Should Try First</h2>
            <p className="section-subtitle">
              Freshly made bestsellers that customers keep reordering.
            </p>
          </div>

          <div className="home-popular__grid">
            {popularItems.map((item) => (
              <article key={item.name} className="popular-card premium-card">
                <div className="popular-card__image-wrap">
                  <img src={item.image} alt={item.name} className="popular-card__image" loading="lazy" />
                  <span className="popular-card__tag">{item.tag}</span>
                </div>
                <div className="popular-card__content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="popular-card__meta">
                    <span>{item.price}</span>
                    <Link to="/menu">View in menu</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-links section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Explore</span>
            <h2 className="section-title">Everything You Need in One Place</h2>
          </div>

          <div className="quick-links__grid">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.to} className="quick-link-card premium-card">
                <div className="quick-link-card__icon">{link.icon}</div>
                <h3 className="quick-link-card__title">{link.title}</h3>
                <p className="quick-link-card__desc">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta__content">
            <span className="badge badge-live">Open 24/7</span>
            <h2 className="final-cta__title">Ready to Order Right Now?</h2>
            <p className="final-cta__text">
              Place your order in minutes and enjoy fresh bakery favorites without waiting.
            </p>
            <div className="final-cta__buttons">
              <a href="tel:+918778873773" className="btn btn-primary btn-lg">Call Now</a>
              <a
                href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-highlight btn-lg"
              >
                Order on WhatsApp
              </a>
              <Link to="/menu" className="btn btn-outline btn-lg">Browse Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
