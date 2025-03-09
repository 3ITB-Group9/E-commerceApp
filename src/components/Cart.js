import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
      <h3>Total: ₱{totalPrice.toLocaleString()}</h3>
      <button className="clear-cart-btn" onClick={clearCart}>🗑 Clear Cart</button>
    </div>
  );
};

export default Cart;
