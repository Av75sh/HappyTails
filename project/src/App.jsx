import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import Navbar from './Navbar/Navbar'; 
import Hero from './Hero/Hero'; 
import About from './About/About';
import Service from './Service/Service';
import Packages from './Packages/Packages';
import Feedback from './Feedback/Feedback';
import Contact from './Contact/Contact';
import Reward from './reward/reward';
import Products from './Product/Product';

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Routes>
      
        <Route path="/" element={
            <>
              <Hero />
              <About />
              <Service />
              <Packages />
              <Feedback />
              <Contact />
            </>
          } 
        />
     
        
        <Route path="/service" element={<> <Service /> <Contact /> </>} />
        <Route path="/products" element={<> <Products /> <Contact /> </>} />
        <Route path="/reward" element={<> <Reward /> <Contact /> </>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
