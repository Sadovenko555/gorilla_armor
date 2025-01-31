import { Link } from "react-router-dom";
import HelmetsCarousel from "../components/HelmetsCarousel";

const Home = () => {
  return (
    <div className="bg-BG text-FC ">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl  font-bold">Feel the spirit of the Middle Ages with our unique armors</h1>
          <p className="mt-4 text-gray-400">
            We create true masterpieces of medieval armors that reflect the best traditions of the past and meet modern quality standards.
          </p>
          <Link to="/helms" className="mt-6 inline-block bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
            View products
          </Link>
        </div>
        <div className="md:w-2/5">
          <img src="/assets/hero-image1.jpg" alt="Armor" className="rounded-lg"/>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="p-12">
        <h2 className="text-2xl font-bold text-center mb-4 p-8">New Products</h2>
        <HelmetsCarousel />
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0F] text-[#F3EEE8] p-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img src="/assets/logo.png" alt="Near You" className="h-16" />
        </div>

        {/* Useful Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contacts" className="hover:text-white">Contacts</a></li>
            <li><a href="/products" className="hover:text-white">Our Products</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/return-policy" className="hover:text-white">Return Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
          </ul>
        </div>

        {/* User Section */}
        <div>
          <h3 className="font-bold mb-2">User</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="/account" className="hover:text-white">My Account</a></li>
            <li><a href="/orders" className="hover:text-white">My Orders</a></li>
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
  );
};

export default Home;
