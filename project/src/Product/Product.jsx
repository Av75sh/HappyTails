import { useState } from "react";
import "./Product.css";
import { products, categories } from "../Product/Product2"; 
import { useCart } from "../Cart/CartContext";

function Product() {
  const { addToCart, cartItems } = useCart(); // ✅ Use global cart
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const truncateName = (name) => {
    const words = name.split(" ");
    return words.length > 7 ? words.slice(0, 7).join(" ") + "..." : name;
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="product-page">
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
          <div className="total-products">Total {filteredProducts.length} Products</div>
          <div className="cart-info">🛒 Cart: {cartItems.length} items</div> {/* ✅ Global cart count */}
        </div>
      </nav>

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

      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{truncateName(product.name)}</h3>
              <p className="category">{product.category}</p>
              <div className="price-section">
                <span className="discount-price">₹{product.price.toFixed(2)}</span>
                <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
                <span className="discount">({product.discount}% OFF)</span>
              </div>
              <div>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}> {/* ✅ Use global cart function */}
                  Add to Cart
                </button>
              </div>
              <span className="rating">★ {product.rating}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => {
          if (pageNumber === 1 || pageNumber === totalPages || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          }
          if ((pageNumber === 2 && currentPage > 3) || (pageNumber === totalPages - 1 && currentPage < totalPages - 2)) {
            return <span key={`dots-${pageNumber}`} className="dots">...</span>;
          }
          return null;
        })}

        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Product;
