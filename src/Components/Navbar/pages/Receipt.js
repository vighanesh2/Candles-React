import React from "react";
import html2canvas from "html2canvas";

const Receipt = ({ cartItems, user, billingAddress, onClose }) => {
  const handleSaveAsImage = () => {
    const receiptElement = document.getElementById("receiptCard");
    html2canvas(receiptElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "receipt.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="receipt-overlay">
      <div className="receipt-card" id="receiptCard">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Receipt</h2>
        <p><strong>User:</strong> {user}</p>
        <p><strong>Billing Address:</strong> {billingAddress}</p>
        <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
        <h3>Items Purchased:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} style={{ width: "30px", height: "30px" }} />
              {item.name} - {item.price.toFixed(2)}€
            </li>
          ))}
        </ul>
        <h3>Total: {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}€</h3>
        <button className="save-btn" onClick={handleSaveAsImage}>
          Save as Image
        </button>
      </div>
    </div>
  );
};

export default Receipt;
