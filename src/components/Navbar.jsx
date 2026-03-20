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
