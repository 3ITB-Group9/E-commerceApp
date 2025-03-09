import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>₱{item.price.toLocaleString()} x {item.quantity}</p>
      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>❌ Remove</button>
    </div>
  );
};

export default CartItem;
