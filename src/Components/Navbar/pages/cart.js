import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      // Clear the cart after purchase confirmation
      // You may want to implement this based on your specific needs
      // Example: setCartItems([]);
    }, 3000); // Reset message after 3 seconds
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
                <p>Price: {item.price.toFixed(2)}€</p> {/* Ensure price is formatted */}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="purchase" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      )}
      {purchased && <p className="purchase-message">Thanks for purchasing!</p>}
    </div>
  );
};

export default Cart;
