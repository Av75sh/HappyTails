import { useState } from "react";
import "./Product.css";
import { products, categories } from "../Product/Product2"; // Assuming products and categories are exported from Product2.js

function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Helper function to truncate product name after 5 words
  const truncateName = (name) => {
    const words = name.split(" ");
    if (words.length > 7) {
      return words.slice(0, 7).join(" ") + "...";
    }
    return name;
  };

  // Filter products based on search term and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle product click (for future navigation)
  const handleProductClick = (productId) => {
    alert(`Navigating to product ${productId}`);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-page">
      {/* Navbar Section */}
      <nav className="navbar3">
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

      {/* Category Filter */}
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${selectedCategory === category.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(selectedCategory === category.name ? "All" : category.name)}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{truncateName(product.name)}</h3> {/* Truncated Name */}
              <p className="category">{product.category}</p>
              <div className="price-section">
                <span className="discount-price">₹{product.price.toFixed(2)}</span>
                <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
                <span className="discount">({product.discount}% OFF)</span>
              </div>
              <div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
              <span className="rating">★ {product.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => {
          if (
            pageNumber === 1 || 
            pageNumber === totalPages || 
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          }

          // Add ellipsis for pages that are far away
          if (
            (pageNumber === 2 && currentPage > 3) || 
            (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
          ) {
            return <span key={`dots-${pageNumber}`} className="dots">...</span>;
          }

          return null;
        })}

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Product;
