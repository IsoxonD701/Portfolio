import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Project from './components/Project/Project';
import Effect from './components/effect/Effect';



function App() {
  return (
    <div>
      <Effect/>
      <Navbar />
      <Home />
      <Project/>
      <Service />
      <Contact />
    </div>
  );
}

export default App;
