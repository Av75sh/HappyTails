import { useCart } from './CartContext';
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  };

  const handlePayNow = () => {
    alert('Payment processing would happen here!');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <p className="item-total">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total-amount">
              <h3>Total Amount:</h3>
              <p>${getCartTotal().toFixed(2)}</p>
            </div>
            <button onClick={handlePayNow} className="pay-now-btn">
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;