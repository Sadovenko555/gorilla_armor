import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import UserAccount from "./pages/UserAccount";
import Cart from "./pages/Cart";
import Helmets from "./pages/Helmets";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import logo from "/assets/logo1.png";


const IconBar = () => {
  return (
    <div className="flex space-x-4">
      <Search className="text-FC w-5 h-5 hover:text-gray-400 transition hidden md:block" />
      <Link to="/account" className="hidden md:block">
        <User className="text-FC w-5 h-5 hover:text-gray-400 transition hidden md:block" />
      </Link>
      <Link to="/cart">
        <ShoppingBag className="text-FC w-5 h-5 hover:text-gray-400 transition hidden md:block" />
      </Link>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename="/gorilla_armor">
      <div className="px-0">
        <header className="flex justify-between items-center p-4 pl-10 pr-10 bg-zinc-950 shadow-md text-FC">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={logo} alt="Gorilla Armor Logo" className="h-10 w-auto" />
            </Link>
            <span className="font-wabroye text-xl font-bold">Gorilla Armor Shop</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
            <Link to="/helmets" className="hover:text-gray-400 transition">Helmets</Link>
            <Link to="/about" className="hover:text-gray-400 transition">About Us</Link>
            <Link to="/contacts" className="hover:text-gray-400 transition">Contacts</Link>
            <Link to="/faq" className="hover:text-gray-400 transition">FAQ</Link>
          </nav>
          <IconBar />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-FC w-8 h-8" /> : <Menu className="text-FC w-12 h-12" />}
          </button>
        </header>

        {/* Мобильное меню */}
        <div className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
    onClick={() => setMenuOpen(false)}></div>

        <nav className={`fixed top-0 right-0 h-full bg-head text-FC p-6 w-64 shadow-md transform transition-transform z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <button className="absolute top-4 right-4 text-FC" onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-center space-y-6 mt-10 text-xl">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/helmets" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition">Helmets</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition">About Us</Link></li>
            <li><Link to="/contacts" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition">Contacts</Link></li>
            <li><Link to="/faq" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition">FAQ</Link></li>
          </ul>
          <div className="flex justify-center space-x-6 mt-6">
            <Link to="/account" onClick={() => setMenuOpen(false)}>
              <User className="text-FC w-6 h-6 hover:text-gray-400 transition" />
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <ShoppingBag className="text-FC w-6 h-6 hover:text-gray-400 transition" />
            </Link>
          </div>
        </nav>

        <div className="p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/helmets" element={<Helmets />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </div>

        <footer className="bg-head text-[#F3EEE8] p-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
            <div>
              
            </div>
            <div className="flex flex-wrap gap-16">
              <div>
                <h3 className="font-bold mb-2">Useful Links</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="/gorilla_armor/about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/gorilla_armor/contacts" className="hover:text-white transition">Contacts</a></li>
                  <li><a href="/gorilla_armor/helmets" className="hover:text-white transition">Our products</a></li>
                  <li><a href="/gorilla_armor/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/gorilla_armor/return-policy" className="hover:text-white transition">Return Policy</a></li>
                  <li><a href="/gorilla_armor/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                  <li><a href="/gorilla_armor/shipping" className="hover:text-white transition">Shipping</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">User</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="/gorilla_armor/account" className="hover:text-white transition">My account</a></li>
                  <li><a href="/gorilla_armor/orders" className="hover:text-white transition">My orders</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-6">© 2025 - Powered by Oblagon.</div>
          <button className="fixed bottom-6 right-6 bg-gray-700 p-3 rounded-md text-white hover:bg-gray-600 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
        </footer>
      </div>
    </Router>
  );
}

export default App;
