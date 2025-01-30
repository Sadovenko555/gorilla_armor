import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Хедер теперь тут */}
        <header className="flex justify-between items-center p-4 bg-zinc-900 shadow-md text-white">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">🛡️ Gorilla Armor</span>
          </div>
          <nav className="space-x-10">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About Us</Link>
            <Link to="/contacts" className="hover:text-gray-400">Contacts</Link>
            <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
          </nav>
          <div className="flex space-x-4">
            <Link to="/account">👤</Link>
            <Link to="/cart">🛒</Link>
          </div>
        </header>

        {/* Контент страниц */}
        <div className="p-0
      ">
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
      </div>
    </Router>
  );
}


export default App;
