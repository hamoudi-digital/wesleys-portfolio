import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import Nav from './components/navigation.js';
import Hero from './components/hero.js';
import About from './components/about.js'
import Media from './components/media';
import Gallery from './components/gallery.js'
import Contact from './components/contact.js';
import Copyright from './components/copyright';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Media />
      <Gallery />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
