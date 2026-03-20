import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', name: 'All Highlights' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'ambiance', name: 'Ambiance' },
  ];

  const images = [
    { id: 1, category: 'cakes', src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop', alt: 'Chocolate truffle cake', size: 'large' },
    { id: 2, category: 'beverages', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop', alt: 'Filter coffee' },
    { id: 3, category: 'snacks', src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop', alt: 'Fresh puffs' },
    { id: 4, category: 'cakes', src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop', alt: 'Black forest cake' },
    { id: 5, category: 'ambiance', src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=600&fit=crop', alt: 'Bakery interior', size: 'large' },
    { id: 6, category: 'snacks', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', alt: 'Pizza' },
    { id: 7, category: 'beverages', src: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=400&fit=crop', alt: 'Masala tea' },
    { id: 8, category: 'cakes', src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop', alt: 'Fruit cake' },
    { id: 9, category: 'snacks', src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop', alt: 'Burger', size: 'large' },
    { id: 10, category: 'beverages', src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop', alt: 'Cold coffee' },
    { id: 11, category: 'cakes', src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop', alt: 'Cupcakes' },
    { id: 12, category: 'ambiance', src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop', alt: 'Fresh bakes display' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero__bg"></div>
        <div className="container">
          <div className="gallery-hero__content">
            <span className="section-eyebrow">Gallery</span>
            <h1>See What Fresh Looks Like</h1>
            <p>Take a closer look at our bestsellers, cafe vibe, and handcrafted bakery favorites.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section section">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`gallery-filter ${activeFilter === filter.id ? 'gallery-filter--active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`gallery-item ${image.size === 'large' ? 'gallery-item--large' : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-item__overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="gallery-cta glass-card">
            <div className="gallery-cta__content">
              <h3>Like What You See?</h3>
              <p>Call or WhatsApp now and get your favorites ready for quick pickup.</p>
            </div>
            <div className="gallery-cta__actions">
              <a href="tel:+918778873773" className="btn btn-primary">
                Order Now
              </a>
              <a
                href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20order%20from%20your%20gallery%20items."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-highlight"
              >
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/place/Rudhra+bakes/@11.039596,77.0749833,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8570475c0af53:0xc3250635a5526e73!8m2!3d11.0395907!4d77.0775582!16s%2Fg%2F11n0cxcc28?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Visit Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox__close" onClick={() => setSelectedImage(null)}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="lightbox__caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
