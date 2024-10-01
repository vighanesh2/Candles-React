import React, { useState, useEffect } from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import Cart from './cart'; 
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore'; 

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products')); 
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList); 
    };

    fetchProducts();
  }, []);

  const addToCart = (name, price) => {
    setCartItems([...cartItems, { name, price }]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  const slideIn = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { duration: 0.9 } },
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
                  <h2 className="price">{product.price}€</h2>
                  <button className="buy" onClick={() => addToCart(product.name, product.price)}>Add to cart</button>
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
