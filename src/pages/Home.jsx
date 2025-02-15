import { Link } from "react-router-dom";
import HelmetsCarousel from "../components/HelmetsCarousel";
import herofoto from "/dist/assets/hero-image5.jpg";
import { Truck, ShieldCheck, Headphones } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-BG relative text-FC">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-screen bg-cover bg-center pt-20 px-4"
        style={{ backgroundImage: `url(${herofoto})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Затемнение фона */}
        <div className="relative z-10 max-w-lg p-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Feel the spirit of the Middle Ages with our unique armors
          </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-lg">
            We create true masterpieces of medieval armors that reflect the best traditions of the past and meet modern quality standards.
          </p>
          <Link
            to="/helmets"
            className="mt-5 inline-block bg-red-800 px-5 py-2 rounded-lg hover:bg-red-700 text-white text-base md:text-lg"
          >
            View products
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-BG text-white py-6 mt-6 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shipping */}
          <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
            <Truck className="w-6 h-6 md:w-10 md:h-10 text-white" />
            <div>
              <h3 className="font-bold text-sm md:text-lg">Fast Worldwide Shipping</h3>
              <p className="text-xs md:text-sm text-gray-400">Delivering orders across Europe and the USA</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
            <ShieldCheck className="w-6 h-6 md:w-10 md:h-10 text-white" />
            <div>
              <h3 className="font-bold text-sm md:text-lg">100% Money-Back Guarantee</h3>
              <p className="text-xs md:text-sm text-gray-400">Full refund if the product doesn’t fit your needs</p>
            </div>
          </div>

          {/* Support 24/7 */}
          <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
            <Headphones className="w-6 h-6 md:w-10 md:h-10 text-white" />
            <div>
              <h3 className="font-bold text-sm md:text-lg">24/7 Customer Support</h3>
              <p className="text-xs md:text-sm text-gray-400">We’re always here to help, any time, any day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-8 px-4">
        <h2 className="text-lg md:text-2xl font-bold text-center mb-4">New Products</h2>
        <HelmetsCarousel />
      </section>
    </div>
  );
};

export default Home;
