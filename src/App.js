import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Project from './components/Project/Project';
import Effect from './components/effect/Effect';
import bg_image from "./images/logo.png"



function App() {
  return (
    <div>

        <img style={{position:"fixed", width:"100%", height:"100%", zIndex:"-1"}} src={bg_image} alt="" />

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
