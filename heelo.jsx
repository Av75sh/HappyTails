import { useState } from 'react';
import './Product.css';

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: 29.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=500&auto=format",
    rating: 4.5
  },
  {
    id: 2,
    name: "Luxury Cat Food",
    price: 24.99,
    category: "Cats",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&auto=format",
    rating: 4.8
  },
  {
    id: 3,
    name: "Rabbit Treats",
    price: 19.99,
    category: "Rabbits",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format",
    rating: 4.3
  },
  {
    id: 4,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  }
];

const categories = [
  {
    name: "Dogs",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=150&h=150&auto=format"
  },
  {
    name: "Cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&auto=format"
  },
  {
    name: "Rabbits",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=150&h=150&auto=format"
  }
];

function Product() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (productId) => {
    alert(`Navigating to product ${productId}`);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Pet Shop</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="total-products">
            {filteredProducts.length} Products
          </div>
        </div>
      </nav>

      <div className="categories">
        {categories.map(category => (
          <div
            key={category.name}
            className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <div className="price-rating">
                <span className="price">${product.price}</span>
                <span className="rating">★ {product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;