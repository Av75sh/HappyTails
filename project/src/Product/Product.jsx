import { useState } from 'react';
import './Product.css';
import cat2 from '../assets/cat2.jpg';
import dogs2 from '../assets/dogs.jpg';

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
    image: cat2,
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
  },
  {
    id: 5,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 6,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 7,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 8,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 9,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 10,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 11,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 12,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 13,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 14,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 15,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 16,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 17,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 18,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 19,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 20,
    name: "Organic Pet Food",
    price: 34.99,
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format",
    rating: 4.7
  },
  {
    id: 21,
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
    image: dogs2
  },
  {
    name: "Cats",
    image: cat2
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
    // In a real app, this would navigate to a product detail page
    alert(`Navigating to product ${productId}`);
  };

  return (
    <div className="product-page">
      <nav className="navbar2">
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