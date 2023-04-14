import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About';
import Footer from './components/Footer';
// import Header from './components/Header';
import Nav from './components/Nav';
// import Home from './pages/Home';
import Contact from './pages/Contact';
// import Body from './components/Body';
import './App.css';


function App() {

  function getWeather() {

  }

  return (
    <div className="App">

      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home getWeather={getWeather.data1} />} /> */}
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>          

      <Footer />
      
    </div>
  

  );
}

export default App;
