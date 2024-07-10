import React, { useState } from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import Cart from './cart'; // Assuming Cart component is implemented separately

// Import product images
import Product1 from '/Users/ramakant/Desktop/candles/candle/src/assets/product1.png';
import Product2 from '/Users/ramakant/Desktop/candles/candle/src/assets/product2.png';
import Product3 from '/Users/ramakant/Desktop/candles/candle/src/assets/product3.png';
import Product4 from '/Users/ramakant/Desktop/candles/candle/src/assets/product4.png';

// Import other product images as needed

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price) => {
    setCartItems([...cartItems, { name, price }]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  const products = [
    {
      id: 1,
      name: 'SWAN LAKE BLUE',
      price: 61.98,
      image: Product1,
    },
    {
      id: 2,
      name: 'SWAN LAKE RED',
      price: 61.98,
      image: Product2,
    },
    {
      id: 2,
      name: 'SWAN LAKE GREEN',
      price: 61.98,
      image: Product3,
    }, {
      id: 2,
      name: 'SWAN LAKE PURPLE',
      price: 61.98,
      image: Product4,
    },
    // Add more products as needed
  ];

  const slideIn = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 0.9 } }
  };

  return (
    <motion.div
      className='perfumes'
      initial="hidden"
      animate="visible"
      variants={slideIn}
    >
      <div className='shoppage'>
        <div className='titleshop'>
          <h1>SHOP</h1>
        </div>
        <div className='items'>
          <div className='shop'>
            {products.map((product, index) => (
              <div className={`card${index + 1}`} key={product.id}>
                <div className="imgBox">
                  <img src={product.image} alt={product.name} className="mouse" />
                </div>
                <div className="contentBox">
                  <h3>{product.name}</h3>
                  <h2 className="price">{product.price.toFixed(2)}€</h2>
                  <button className="buy" onClick={() => addToCart(product.name, product.price)}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </motion.div>
  );
};

export default Products;
