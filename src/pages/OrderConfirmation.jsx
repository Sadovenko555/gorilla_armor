import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-BG text-FC p-6">
      <div className="bg-[#222] border border-gray-600 shadow-lg rounded-lg p-8 text-center w-full max-w-md">
        <CheckCircle className="w-20 h-20 text-green-500 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-gray-400 mb-6">
          Your order has been successfully placed. We will send you a confirmation email shortly.
        </p>
        <Link
          to="/"
          className="bg-btn text-FC px-6 py-3 rounded-lg hover:bg-opacity-80 transition shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
