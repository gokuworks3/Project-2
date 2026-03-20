import { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'snacks', name: 'Snacks & Puffs' },
    { id: 'pizza', name: 'Pizza & Fast Food' },
    { id: 'beverages', name: 'Beverages' },
  ];

  const menuItems = [
    // Cakes
    { id: 1, category: 'cakes', name: 'Chocolate Truffle Cake', description: 'Rich, decadent chocolate layers with ganache', price: 450, image: 'https://source.unsplash.com/600x400/?chocolate,truffle,cake,bakery', badge: 'Bestseller' },
    { id: 2, category: 'cakes', name: 'Black Forest Cake', description: 'Classic cherry and cream delight', price: 400, image: 'https://source.unsplash.com/600x400/?black,forest,cake,cherry,cream' },
    { id: 3, category: 'cakes', name: 'Vanilla Pastry', description: 'Light and fluffy vanilla sponge', price: 45, image: 'https://source.unsplash.com/600x400/?vanilla,pastry,cake,bakery' },
    { id: 4, category: 'cakes', name: 'Fresh Fruit Cake', description: 'Seasonal fruits with fresh cream', price: 500, image: 'https://source.unsplash.com/600x400/?fruit,cake,cream,bakery' },
    { id: 5, category: 'cakes', name: 'Red Velvet Slice', description: 'Cream cheese frosted velvet', price: 75, image: 'https://source.unsplash.com/600x400/?red,velvet,cake,slice' },
    { id: 6, category: 'cakes', name: 'Cupcakes (Box of 6)', description: 'Assorted flavors, perfect for sharing', price: 180, image: 'https://source.unsplash.com/600x400/?cupcakes,box,bakery' },

    // Snacks - Using accurate images for Indian bakery items
    { id: 7, category: 'snacks', name: 'Veg Puff', description: 'Flaky pastry with spiced potato filling', price: 20, image: 'https://source.unsplash.com/600x400/?vegetable,puff,pastry', badge: 'Popular' },
    { id: 8, category: 'snacks', name: 'Egg Puff', description: 'Golden crust with seasoned egg', price: 25, image: 'https://source.unsplash.com/600x400/?egg,puff,pastry' },
    { id: 9, category: 'snacks', name: 'Chicken Puff', description: 'Spicy minced chicken in pastry', price: 35, image: 'https://source.unsplash.com/600x400/?chicken,puff,pastry' },
    { id: 10, category: 'snacks', name: 'Samosa (2 pcs)', description: 'Crispy triangles with potato masala', price: 30, image: 'https://source.unsplash.com/600x400/?samosa,indian,snack' },
    { id: 11, category: 'snacks', name: 'Bread Roll', description: 'Deep fried with spicy filling', price: 25, image: 'https://source.unsplash.com/600x400/?bread,roll,fried,snack' },
    { id: 12, category: 'snacks', name: 'Cutlet', description: 'Mashed potato patty, crispy fried', price: 25, image: 'https://source.unsplash.com/600x400/?vegetable,cutlet,snack' },

    // Pizza & Fast Food
    { id: 13, category: 'pizza', name: 'Veg Pizza (Regular)', description: 'Loaded with fresh vegetables and cheese', price: 120, image: 'https://source.unsplash.com/600x400/?veg,pizza,cheese', badge: 'Popular' },
    { id: 14, category: 'pizza', name: 'Chicken Pizza (Regular)', description: 'Tender chicken with special sauce', price: 150, image: 'https://source.unsplash.com/600x400/?chicken,pizza' },
    { id: 15, category: 'pizza', name: 'Veg Burger', description: 'Crispy patty with fresh veggies', price: 60, image: 'https://source.unsplash.com/600x400/?veg,burger' },
    { id: 16, category: 'pizza', name: 'Chicken Burger', description: 'Juicy chicken with special mayo', price: 80, image: 'https://source.unsplash.com/600x400/?chicken,burger' },
    { id: 17, category: 'pizza', name: 'Veg Sandwich', description: 'Grilled with cheese and veggies', price: 50, image: 'https://source.unsplash.com/600x400/?vegetable,grilled,sandwich' },
    { id: 18, category: 'pizza', name: 'Club Sandwich', description: 'Triple-decker with chicken & egg', price: 90, image: 'https://source.unsplash.com/600x400/?club,sandwich,chicken,egg' },

    // Beverages
    { id: 19, category: 'beverages', name: 'Filter Coffee', description: 'Strong, authentic South Indian brew', price: 25, image: 'https://source.unsplash.com/600x400/?filter,coffee,indian', badge: 'Must Try' },
    { id: 20, category: 'beverages', name: 'Masala Tea', description: 'Spiced chai with ginger', price: 20, image: 'https://source.unsplash.com/600x400/?masala,chai,tea' },
    { id: 21, category: 'beverages', name: 'Badam Milk', description: 'Creamy almond milk, hot or cold', price: 40, image: 'https://source.unsplash.com/600x400/?almond,milk,drink' },
    { id: 22, category: 'beverages', name: 'Fresh Lime Soda', description: 'Refreshing lime with soda', price: 30, image: 'https://source.unsplash.com/600x400/?lime,soda,drink' },
    { id: 23, category: 'beverages', name: 'Mango Milkshake', description: 'Thick and creamy mango shake', price: 60, image: 'https://source.unsplash.com/600x400/?mango,milkshake' },
    { id: 24, category: 'beverages', name: 'Cold Coffee', description: 'Chilled coffee with ice cream', price: 70, image: 'https://source.unsplash.com/600x400/?cold,coffee,iced' },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero__bg"></div>
        <div className="container">
          <div className="menu-hero__content">
            <span className="section-eyebrow">Our Menu</span>
            <h1>Fresh, Comforting, and Ready Fast</h1>
            <p>
              Explore handcrafted cakes, crispy snacks, savory fast food, and refreshing beverages made fresh all day.
            </p>
            <div className="menu-hero__meta">
              <span>Open 24/7</span>
              <span>Freshly Prepared</span>
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="menu-section section">
        <div className="container">
          {/* Category Tabs */}
          <div className="menu-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`menu-tab ${activeCategory === category.id ? 'menu-tab--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-item premium-card">
                <div className="menu-item__image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  {item.badge && (
                    <span className="menu-item__badge">{item.badge}</span>
                  )}
                </div>
                <div className="menu-item__content">
                  <div className="menu-item__header">
                    <h3 className="menu-item__name">{item.name}</h3>
                    <span className="menu-item__price">Rs. {item.price}</span>
                  </div>
                  <p className="menu-item__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="menu-cta glass-card">
            <div className="menu-cta__content">
              <h3>Ready to Place Your Order?</h3>
              <p>Quick pickup, custom cake requests, and bulk snack orders available anytime.</p>
            </div>
            <div className="menu-cta__actions">
              <a href="tel:+918778873773" className="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call to Order
              </a>
              <a
                href="https://wa.me/918778873773?text=Hi%20Rudhra%20Bakes%2C%20I%20want%20to%20order%20from%20your%20menu."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-highlight"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
