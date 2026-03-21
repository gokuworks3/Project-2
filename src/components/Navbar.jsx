import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="navbar__logo-icon">RB</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Rudhra Bakes</span>
            <span className="navbar__logo-tagline">Premium 24/7 Bakery</span>
          </div>
        </Link>

        <nav id="mobile-navigation" className={`navbar__nav ${isMobileMenuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `navbar__nav-link ${isActive ? 'navbar__nav-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile CTA buttons */}
          <div className="navbar__mobile-cta">
            <div className="navbar__mobile-info">
              <span className="navbar__mobile-badge">
                <span className="navbar__badge-dot"></span>
                Open 24/7
              </span>
              <span className="navbar__mobile-rating">4.1★ from 200+ reviews</span>
            </div>
            <a
              href="tel:+918778873773"
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-highlight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.56 0 .25 5.3.25 11.81c0 2.08.54 4.1 1.58 5.88L0 24l6.5-1.7a11.78 11.78 0 0 0 5.56 1.41h.01c6.5 0 11.8-5.3 11.8-11.8 0-3.15-1.23-6.12-3.35-8.43Zm-8.46 18.2h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.85 1 1.03-3.75-.23-.38a9.77 9.77 0 0 1-1.5-5.16c0-5.41 4.41-9.81 9.83-9.81a9.76 9.76 0 0 1 6.96 2.89 9.74 9.74 0 0 1 2.86 6.93c0 5.42-4.4 9.82-9.82 9.82Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </nav>

        <button
          type="button"
          className={`navbar__backdrop ${isMobileMenuOpen ? 'navbar__backdrop--visible' : ''}`}
          aria-label="Close mobile menu"
          onClick={() => setIsMobileMenuOpen(false)}
        ></button>

        <div className="navbar__actions">
          <div className="navbar__meta">
            <span className="navbar__badge navbar__badge--desktop">
              <span className="navbar__badge-dot"></span>
              Open 24/7
            </span>
            <span className="navbar__rating">4.1★ from 200+ customer reviews</span>
          </div>
          <a href="tel:+918778873773" className="btn btn-primary btn-sm navbar__cta--desktop">
            Order Now
          </a>
        </div>

        <button
          className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
