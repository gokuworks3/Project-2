import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy load pages for better performance and code splitting
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reviews = lazy(() => import('./pages/Reviews'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = Array.from(
      document.querySelectorAll(
        'main section, main .premium-card, main .glass-card, main .menu-item, main .gallery-item',
      ),
    );

    if (!revealTargets.length) {
      return undefined;
    }

    if (prefersReducedMotion) {
      revealTargets.forEach((element) => {
        element.classList.remove('reveal-init');
        element.classList.add('reveal-in');
      });
      return undefined;
    }

    revealTargets.forEach((element) => {
      element.classList.add('reveal-init');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

export default App;
