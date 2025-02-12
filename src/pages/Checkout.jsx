import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate(); // Перенос внутрь компонента

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
    navigate("/order-confirmation"); // Перенаправление после оформления заказа
  };

  return (
    <div className="p-4 w-full min-h-screen flex justify-center items-center bg-[#333]">
      <div className="w-full max-w-4xl text-FC">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <form onSubmit={handleSubmit} className="bg-[#222] p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-4">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="text" name="expiration" placeholder="MM/YY" value={formData.expiration} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
            <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} className="p-2 bg-[#333] border border-gray-600 rounded w-full" required />
          </div>
          <button type="handleSubmit" className="w-full mt-6 bg-red-800 text-white p-3 rounded hover:bg-red-700 transition">
            Place Order
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/cart" className="text-FC hover:underline">Back to Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
