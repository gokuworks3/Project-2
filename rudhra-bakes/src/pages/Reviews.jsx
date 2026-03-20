import './Reviews.css';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Karthik R.',
      role: 'Regular Customer',
      text: 'Good service and enough varieties. This is my go-to place for quick snacks after college. The puffs are always fresh!',
      rating: 5,
    },
    {
      name: 'Priya S.',
      role: 'Local Resident',
      text: 'Quality and tasty food at affordable prices. Love that they\'re open 24/7 — perfect for late night coffee runs!',
      rating: 5,
    },
    {
      name: 'Arun M.',
      role: 'Coffee Enthusiast',
      text: 'Strong filter coffee — must try! The authentic taste is hard to find elsewhere. I come here almost every morning.',
      rating: 5,
    },
    {
      name: 'Sneha K.',
      role: 'Student',
      text: 'Best place near our college. Budget-friendly prices and delicious food. Their veg puffs are absolutely amazing!',
      rating: 5,
    },
    {
      name: 'Rajesh V.',
      role: 'Working Professional',
      text: 'Perfect for late night cravings. The 24/7 service is a blessing. Fresh items even at 2 AM!',
      rating: 4,
    },
    {
      name: 'Divya M.',
      role: 'Food Blogger',
      text: 'Hidden gem in Coimbatore! The cakes are fresh and the variety is impressive for a local bakery.',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      title: 'Freshly Prepared',
      description: 'Every item is made fresh daily using premium ingredients.',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Prime Location',
      description: 'Right opposite Sakthi Engineering College — easy to find.',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Wide Variety',
      description: 'Cakes, snacks, pizza, beverages — all under one roof.',
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: 'Trusted by 200+',
      description: 'Rated 4.1★ with consistently positive reviews.',
    },
  ];

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={i < count ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ));
  };

  return (
    <div className="reviews-page">
      {/* Hero */}
      <section className="reviews-hero">
        <div className="reviews-hero__bg"></div>
        <div className="container">
          <div className="reviews-hero__content">
            <span className="section-eyebrow">Reviews</span>
            <h1>Customers Trust Us Every Day</h1>
            <p>Real voices from local customers who rely on Rudhra Bakes for quality and consistency.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="reviews-stats section">
        <div className="container">
          <div className="reviews-stats__grid glass-card">
            <div className="reviews-stats__item">
              <span className="reviews-stats__value">4.1</span>
              <div className="reviews-stats__stars">{renderStars(4)}</div>
              <span className="reviews-stats__label">Average Rating</span>
            </div>
            <div className="reviews-stats__divider"></div>
            <div className="reviews-stats__item">
              <span className="reviews-stats__value">207+</span>
              <span className="reviews-stats__label">Happy Reviews</span>
            </div>
            <div className="reviews-stats__divider"></div>
            <div className="reviews-stats__item">
              <span className="reviews-stats__value">1000+</span>
              <span className="reviews-stats__label">Monthly Walk-ins</span>
            </div>
            <div className="reviews-stats__divider"></div>
            <div className="reviews-stats__item">
              <span className="reviews-stats__value">24/7</span>
              <span className="reviews-stats__label">Always Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="reviews-testimonials section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="section-title">Customer Stories</h2>
            <p className="section-subtitle">
              Honest feedback from the people we serve every day.
            </p>
          </div>

          <div className="reviews-testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="review-card premium-card">
                <div className="review-card__header">
                  <div className="review-card__avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="review-card__info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <div className="review-card__rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="review-card__text">"{testimonial.text}"</p>
                <div className="review-card__quote">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="reviews-why-us section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">More Than Just a Bakery</h2>
            <p className="section-subtitle">
              We focus on what matters most: taste, trust, and convenience.
            </p>
          </div>

          <div className="reviews-why-us__grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-us-card glass-card">
                <div className="why-us-card__icon">{item.icon}</div>
                <h3 className="why-us-card__title">{item.title}</h3>
                <p className="why-us-card__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reviews-cta">
        <div className="reviews-cta__bg"></div>
        <div className="container">
          <div className="reviews-cta__content">
            <h2 className="reviews-cta__title">Ready to Try Us?</h2>
            <p className="reviews-cta__text">
              Join our growing customer family and enjoy fresh food whenever cravings hit.
            </p>
            <div className="reviews-cta__buttons">
              <a href="tel:+918778873773" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Order Now
              </a>
              <a
                href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-highlight btn-lg"
              >
                WhatsApp Order
              </a>
              <a
                href="https://maps.google.com/?q=66/3C+Milakai+Thottam+Opposite+Sakthi+Engineering+College+Venkitapuram+Post+Coimbatore+Tamil+Nadu+641062"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
