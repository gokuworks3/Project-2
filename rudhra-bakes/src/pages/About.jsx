import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Fresh Ingredients, Zero Compromise',
      description: 'We prepare in small batches and use trusted ingredients so every order tastes consistently fresh.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Always Available for You',
      description: 'Open 24/7 because real cravings do not wait for business hours.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Proudly Local, Community First',
      description: 'From college students to neighborhood families, we are built to serve the Coimbatore community with warmth.',
    },
  ];

  const timeline = [
    {
      year: 'Day 1',
      title: 'A Simple Promise',
      description: 'Rudhra Bakes started with one promise: serve fresh food at fair prices for everyday customers.',
    },
    {
      year: 'Growth',
      title: 'Menu Built by Customers',
      description: 'As customer demand grew, we added pizza, burgers, puffs, and beverages without sacrificing quality.',
    },
    {
      year: 'Today',
      title: 'Trusted 24/7 Neighborhood Bakery',
      description: 'Now loved by local customers with 200+ reviews and dependable round-the-clock service.',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg"></div>
        <div className="container">
          <div className="about-hero__content">
            <span className="section-eyebrow">Our Story</span>
            <h1>More Than a Bakery.<br /><span className="text-gradient">A Trusted Daily Ritual.</span></h1>
            <p>
              We blend fresh preparation, friendly service, and affordable pricing to make every visit feel easy and satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story section">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__images">
              <div className="about-story__image about-story__image--main">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=700&fit=crop"
                  alt="Fresh bakery items"
                />
              </div>
              <div className="about-story__image about-story__image--secondary glass-card">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop"
                  alt="Bakery atmosphere"
                />
              </div>
              <div className="about-story__badge glass-card">
                <span className="about-story__badge-number">10+</span>
                <span className="about-story__badge-text">Years of<br />Excellence</span>
              </div>
            </div>
            <div className="about-story__content">
              <h2>A Neighborhood Bakery That Never Lets You Down</h2>
              <p>
                Located right opposite Sakthi Engineering College, Rudhra Bakes has become
                a reliable favorite for students, professionals, and families. Whether
                you need a quick snack between classes or a late-night comfort meal,
                we are ready with fresh options.
              </p>
              <p>
                Our mission is clear: deliver trustworthy taste with no compromise on
                quality, speed, or value. From signature cakes to authentic filter coffee,
                every item is prepared to make customers return with confidence.
              </p>
              <div className="about-story__highlight glass-card">
                <div className="about-story__highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>Convenient Location</strong>
                  <span>66/3C Milakai Thottam, Opp. Sakthi Engineering College</span>
                </div>
              </div>
              <Link to="/menu" className="btn btn-primary">
                Explore Our Bestsellers
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              Simple principles that guide everything we do.
            </p>
          </div>
          <div className="about-values__grid">
            {values.map((value, index) => (
              <div key={index} className="about-value glass-card">
                <div className="about-value__icon">{value.icon}</div>
                <h3 className="about-value__title">{value.title}</h3>
                <p className="about-value__desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">How We Got Here</h2>
          </div>
          <div className="about-timeline__items">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-item__marker">
                  <span>{item.year}</span>
                </div>
                <div className="timeline-item__content glass-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__bg"></div>
        <div className="container">
          <div className="about-cta__content">
            <h2>Come Taste the Difference</h2>
            <p>Visit today and discover why locals trust Rudhra Bakes for every craving.</p>
            <div className="about-cta__buttons">
              <a
                href="https://maps.google.com/?q=66/3C+Milakai+Thottam+Opposite+Sakthi+Engineering+College+Venkitapuram+Post+Coimbatore+Tamil+Nadu+641062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Get Directions
              </a>
              <a
                href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20know%20more%20about%20your%20offerings."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-highlight btn-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
