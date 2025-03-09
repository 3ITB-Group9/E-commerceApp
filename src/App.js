import React, { Component } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      searchQuery: "",
      totalPrice: 0,
    };
  }

  componentDidMount() {
    console.log("Fetching product data...");
    setTimeout(() => {
      this.setState({
        products: [
          { id: 1, name: "Laptop", price: 45000, image: "/images/laptop.jpg" },
          { id: 2, name: "Smartphone", price: 25000, image: "/images/smartphone.jpg" },
          { id: 3, name: "Headphones", price: 5000, image: "/images/headphone.jpg" },
          { id: 4, name: "Computer", price: 15000, image: "/images/computer.jpg" },
          { id: 5, name: "Aircon", price: 21000, image: "/images/aircon.jpg" },
          { id: 6, name: "Refrigerator", price: 16000, image: "/images/refrigerator.jfif" },
        ],
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      const totalPrice = this.state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      if (prevState.totalPrice !== totalPrice) {
        this.setState({ totalPrice });
      }
    }
  }

  addToCart = (product) => {
    this.setState((prevState) => {
      const existingItem = prevState.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: prevState.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { cart: [...prevState.cart, { ...product, quantity: 1 }] };
      }
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    }));
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Basic E-Commerce App</h1>
        <input
          type="text"
          placeholder="Search product..."
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <ProductList products={filteredProducts} addToCart={this.addToCart} />
        <Cart
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
          clearCart={this.clearCart}
          totalPrice={this.state.totalPrice}
        />
      </div>
    );
  }
}

export default App;
