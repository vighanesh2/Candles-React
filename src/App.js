import React, { useEffect, useState } from 'react';
import Loader from './Loader.js';
import Homescreen from './Homescreen.js';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Products from './Components/Navbar/pages/Products.js';
import Perfumes from './Components/Navbar/pages/Perfumes.js';
import Contactus from './Components/Navbar/Contactus.js';
import CustomCursor from './CustomCursor.js';
import gif from './assets/cursor-unscreen.gif';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />

  ) : (

    <div className='app'>

      <Navbar />
      <Routes>

        <Route path="/" element={<Homescreen />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      
      <CustomCursor gifUrl={gif} />

     {}

    </div>
  );
}

export default App;
