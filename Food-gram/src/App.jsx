// src/App.js
import { useState } from 'react';
import FoodItem from './Components/FoodItem';
import Cart from './Components/Cart';

const App = () => {
  const initialMenu = [
    { id: 1, name: 'Burger', description: 'Delicious burger with cheese', price: 8.99, image: 'burger.jpg' },
    { id: 2, name: 'Pizza', description: 'Tasty pizza with your favorite toppings', price: 12.99, image: 'pizza.jpg' },
    // Add more items as needed
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (!cart.find((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Food Menu</h1>
        {initialMenu.map((item) => (
          <FoodItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            isAdded={!!cart.find((cartItem) => cartItem.id === item.id)}
          />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;
