import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddToCart = () => {
    if (productName.trim() === '') {
      alert('Please enter a product name.');
      return;
    }

    const newItem = {
      id: Math.random(),
      name: productName,
      quantity: productQuantity,
    };

    setCart([...cart, newItem]);
    setProductName('');
    setProductQuantity(1);
  };

  const handleEditQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDeleteItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name} (Quantity: {item.quantity})</span>
              <button onClick={() => handleEditQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleEditQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
