import React, { useState, useEffect } from 'react';
import { db } from './firebase'; 
import { collection, getDocs, addDoc } from 'firebase/firestore';
import './cart.css';


const Cart = ({ cartItems, removeFromCart }) => {
  const [purchased, setPurchased] = useState(false);



  const handlePurchase = async () => {
    setPurchased(true);

    const purchaseData = {
      timestamp: new Date(),
      user: "Vighanesh Gaund", 
      billingAddress: "123 Main St, NY", 
      items: cartItems,
    };

    try {
    
      await addDoc(collection(db, "purchases"), purchaseData);
      console.log("Purchase added to Firestore");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleCloseReceipt = () => {
    setPurchased(false); 
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>Price: {item.price.toFixed(2)}€</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="purchase" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      )}
      {purchased && (
        <div className="receipt">
          <div className="receipt-header">
            <h3>Receipt</h3>
            <button className="close-button" onClick={handleCloseReceipt}>X</button>
          </div>
          <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
          <p><strong>Name:</strong> Vighanesh Gaund</p> 
          <p><strong>Billing Address:</strong> 123 Main St, NY</p> 
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price.toFixed(2)}€
              </li>
            ))}
          </ul>
          <div className="receipt-total">
            <strong>Total: {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}€</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
