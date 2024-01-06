import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-200 p-4 h-screen fixed right-0 top-0 w-1/4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-2 flex justify-between">
          <div>
            <p>{item.name}</p>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">
              +
            </button>
            <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="font-bold">Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
