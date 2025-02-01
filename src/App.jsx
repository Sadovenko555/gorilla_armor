import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react"; // Import the icons
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import UserAccount from "./pages/UserAccount";
import Cart from "./pages/Cart";
import Helms from "./pages/Helms";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

// IconBar component
const IconBar = () => {
  return (
    <div className="flex space-x-4">
      <Search className="text-FC w-5 h-5 hover:text-gray-400 transition" />

      <Link to="/account">
        <User className="text-FC w-5 h-5 hover:text-gray-400 transition" />
      </Link>
      <Link to="/cart">
        <ShoppingBag className="text-FC w-5 h-5 hover:text-gray-400 transition" />
      </Link>
    </div>
  );
};

function App() {
  // Определяем базовый путь в зависимости от среды
  const basename = process.env.NODE_ENV === 'production' ? '/gorilla_armor/' : '';

  return (
    <Router basename={basename}> {/* Указываем базовый путь для продакшн-среды */}
      <div className="px-0">
        {/* Header */}
        <header className="flex justify-between items-center p-4 pl-10 pr-10 bg-head shadow-md text-FC">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.png" alt="Gorilla Armor Logo" className="h-10 w-auto" />
            <span className="text-xl font-medium">Gorilla Armor Shop</span>
          </div>
          <nav className="space-x-10">
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-400 transition">About Us</Link>
            <Link to="/contacts" className="hover:text-gray-400 transition">Contacts</Link>
            <Link to="/faq" className="hover:text-gray-400 transition">FAQ</Link>
          </nav>

          {/* Right side of header */}
          <IconBar />
        </header>

        {/* Page Content */}
        <div className="p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/helms" element={<Helms />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-head text-[#F3EEE8] p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
            {/* Logo Section */}
            <div className="mb-6 md:mb-0">
              <img src="/assets/logo.png" alt="Near You" className="h-16" />
            </div>

            {/* Useful Links */}
            <div className="mb-6 md:mb-0 ml-80">
              <h3 className="font-bold mb-2">Useful Links</h3>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/contacts" className="hover:text-white transition">Contacts</a></li>
                <li><a href="/products" className="hover:text-white transition">Our Products</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/return-policy" className="hover:text-white transition">Return Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="/shipping" className="hover:text-white transition">Shipping</a></li>
              </ul>
            </div>

            {/* User Section */}
            <div >
              <h3 className="font-bold mb-2">User</h3>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/account" className="hover:text-white transition">My Account</a></li>
                <li><a href="/orders" className="hover:text-white transition">My Orders</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-left text-gray-500 mt-6">
            © 2025 - Powered by Oblagon.
          </div>

          {/* Scroll to Top Button */}
          <button 
            className="fixed bottom-6 right-6 bg-gray-700 p-3 rounded-md text-white hover:bg-gray-600 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </button>
        </footer>
      </div>
    </Router>
  );
}

export default App;
