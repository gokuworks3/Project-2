import SEO, { getLocalBusinessSchema, getBreadcrumbSchema } from '../components/SEO';
import './Contact.css';

const Contact = () => {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getLocalBusinessSchema(),
      getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us - Location, Phone & Hours"
        description="Contact Rudhra Bakes: Call 087788 73773, WhatsApp, or visit us at 66/3C Milakai Thottam, opposite Sakthi Engineering College, Coimbatore. Open 24/7."
        keywords="Rudhra Bakes contact, bakery phone number Coimbatore, bakery location Sakthi Engineering College, 24 hours bakery address, WhatsApp order bakery"
        canonicalUrl="/contact"
        structuredData={contactSchema}
      />
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg"></div>
        <div className="container">
          <div className="contact-hero__content">
            <span className="section-eyebrow">Contact Us</span>
            <h1>Reach Us in Seconds</h1>
            <p>Call, WhatsApp, or visit us anytime. We are open 24/7 to serve you fresh.</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info">
              <div className="contact-card glass-card">
                <div className="contact-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Address</h3>
                  <p>
                    66/3C Milakai Thottam,<br />
                    Opposite Sakthi Engineering College,<br />
                    Venkitapuram Post,<br />
                    Coimbatore, Tamil Nadu 641062
                  </p>
                </div>
              </div>

              <div className="contact-card glass-card">
                <div className="contact-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Phone</h3>
                  <a href="tel:+918778873773" className="contact-phone">
                    087788 73773
                  </a>
                  <p className="contact-phone-note">Tap to call directly</p>
                </div>
              </div>

              <div className="contact-card glass-card">
                <div className="contact-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Hours</h3>
                  <div className="contact-hours">
                    <span className="contact-hours__badge">
                      <span className="contact-hours__dot"></span>
                      Open 24 Hours
                    </span>
                  </div>
                  <p>Every day including weekends and holidays</p>
                </div>
              </div>

              <div className="contact-card contact-card--highlight glass-card">
                <div className="contact-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Customer Reviews</h3>
                  <div className="contact-rating">
                    <span className="contact-rating__score">4.1</span>
                    <div className="contact-rating__stars">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                    <span className="contact-rating__count">200+ reviews</span>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a href="tel:+918778873773" className="btn btn-primary btn-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-highlight btn-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.56 0 .25 5.3.25 11.81c0 2.08.54 4.1 1.58 5.88L0 24l6.5-1.7a11.78 11.78 0 0 0 5.56 1.41h.01c6.5 0 11.8-5.3 11.8-11.8 0-3.15-1.23-6.12-3.35-8.43Zm-8.46 18.2h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.85 1 1.03-3.75-.23-.38a9.77 9.77 0 0 1-1.5-5.16c0-5.41 4.41-9.81 9.83-9.81a9.76 9.76 0 0 1 6.96 2.89 9.74 9.74 0 0 1 2.86 6.93c0 5.42-4.4 9.82-9.82 9.82Zm5.39-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.23-.65.08-.3-.15-1.24-.46-2.36-1.48a8.88 8.88 0 0 1-1.64-2.03c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.04 1.01-1.04 2.45 0 1.44 1.06 2.84 1.2 3.04.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/place/Rudhra+bakes/@11.039596,77.0749833,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8570475c0af53:0xc3250635a5526e73!8m2!3d11.0395907!4d77.0775582!16s%2Fg%2F11n0cxcc28?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <div className="contact-map__wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2286684869707!2d77.0749833!3d11.0395907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570475c0af53%3A0xc3250635a5526e73!2sRudhra%20bakes!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rudhra Bakes Location"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/Rudhra+bakes/@11.039596,77.0749833,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8570475c0af53:0xc3250635a5526e73!8m2!3d11.0395907!4d77.0775582!16s%2Fg%2F11n0cxcc28?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map__link btn btn-highlight"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
