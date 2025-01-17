import React from 'react';
import './App.css';
import './index.css';
import Navbar from './Navbar/Navbar'; 
import Hero from './Hero/Hero'; 
import About from './About/About';
import Service from './Service/Service';
import Packages from './Packages/Packages';
import Feedback from './Feedback/Feedback';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Hero /> 
      <About />
      <Service />
      <Packages />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
