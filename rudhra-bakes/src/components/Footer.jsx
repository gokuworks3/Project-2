import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  const menuLinks = [
    { label: 'Signature Cakes', to: '/menu' },
    { label: 'Fresh Puffs & Snacks', to: '/menu' },
    { label: 'Pizza & Burgers', to: '/menu' },
    { label: 'Coffee & Beverages', to: '/menu' },
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span className="footer__logo-icon">R</span>
                <span className="footer__logo-text">Rudhra Bakes</span>
              </Link>
              <p className="footer__tagline">
                Freshly baked comfort food, handcrafted cakes, and strong coffee,
                served all day and all night for Coimbatore families, students, and professionals.
              </p>
              <div className="footer__trusts">
                <div className="footer__badge">
                  <span className="footer__badge-dot"></span>
                  Open 24/7
                </div>
                <span className="footer__trust-item">4.1★ Rated on Google</span>
                <span className="footer__trust-item">200+ Happy Reviews</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links">
              <h4 className="footer__links-title">Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu */}
            <div className="footer__links">
              <h4 className="footer__links-title">Our Menu</h4>
              <ul>
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__contact">
              <h4 className="footer__links-title">Contact Us</h4>
              <a href="tel:+918778873773" className="footer__phone">
                087788 73773
              </a>
              <address className="footer__address">
                66/3C Milakai Thottam,<br />
                Opp. Sakthi Engineering College,<br />
                Coimbatore - 641062
              </address>
              <div className="footer__ctas">
                <a href="tel:+918778873773" className="btn btn-primary btn-sm">
                  Call Now
                </a>
                <a
                  href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=66/3C+Milakai+Thottam+Opposite+Sakthi+Engineering+College+Venkitapuram+Post+Coimbatore+Tamil+Nadu+641062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p>&copy; {currentYear} Rudhra Bakes. All rights reserved.</p>
            <p className="footer__credit">
              Crafted for delightful cravings in Coimbatore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
