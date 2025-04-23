import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Appointment from './Form/Appointment';

import './App.css';
import './index.css';
import Navbar from './Navbar/Navbar'; 
import Front from './Front/Front';
import About from './About/About';
import Service from './Service/Service';
import Packages from './Packages/Packages';
import Feedback from './Feedback/Feedback';
import Contact from './Contact/Contact';
import Reward from './reward/reward';
import Products from './Product/Product';
import Cart from './Cart/Cart';
import { CartProvider } from './Cart/CartContext';  // Import CartProvider

function App() {
  return (
    <CartProvider>  {/* Wrap your entire app with CartProvider */}
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={
              <>
                <Front />
                <About />
                <Service />
                <Packages />
                <Feedback />
                <Contact />
              </>
            } 
          />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/Packages" element={<><Packages /><Contact /></>} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<><Products /><Contact /></>} />
          <Route path="/reward" element={<><Reward /><Contact /></>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
