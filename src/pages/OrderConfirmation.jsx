import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-BG text-FC text-center">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
      <p className="text-gray-400 mb-6">Your order has been successfully placed. We will send you a confirmation email shortly.</p>
      <Link to="/" className="bg-btn text-FC px-6 py-3 rounded-lg hover:bg-opacity-80 transition">Return to Home</Link>
    </div>
  );
};

export default OrderConfirmation;
