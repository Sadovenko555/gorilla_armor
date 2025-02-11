import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import helm1 from "/assets/helm1.jpg";
import helm2 from "/assets/helm2.jpg";
import helm3 from "/assets/helm3.jpg";

const initialCartItems = [
  { id: 1, name: "Knight's Helmet", price: 120, image: helm1, quantity: 1 },
  { id: 2, name: "Viking Helmet", price: 150, image: helm2, quantity: 1 },
  { id: 3, name: "Samurai Kabuto", price: 200, image: helm3, quantity: 1 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-BG text-FC p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-head p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-400">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-700 px-2 rounded text-white" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="bg-gray-700 px-2 rounded text-white" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="ml-4 text-red-500 hover:text-red-400" onClick={() => removeItem(item.id)}>
                <Trash2 />
              </button>
            </div>
          ))}
          <div className="text-right text-xl font-bold">Total: ${totalPrice}</div>
          <div className="text-center mt-4">
            <Link to="/checkout" className="bg-red-800 px-6 py-2 rounded-lg hover:bg-red-700">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
