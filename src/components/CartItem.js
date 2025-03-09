import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ₱{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
