import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import Nav from './components/navigation.js';
import Hero from './components/hero.js';
import About from './components/about.js'
import Contact from './components/contact.js';
import Copyright from './components/copyright';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
