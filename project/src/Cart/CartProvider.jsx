import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Cart/CartContext"; // Import the provider
import Navbar from "./Navbar"; // Ensure this is correct
import OtherComponents from "./OtherComponents"; // Import other components

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <OtherComponents />
      </Router>
    </CartProvider>
  );
}

export default App;
