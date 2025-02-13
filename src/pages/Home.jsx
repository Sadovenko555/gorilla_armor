import { Link } from "react-router-dom";
import HelmetsCarousel from "../components/HelmetsCarousel";
import herofoto from "/dist/assets/hero-image4.jpg";
import { Truck, ShieldCheck, Headphones } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-BG text-FC px-4 md:px-10">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Feel the spirit of the Middle Ages with our unique armors
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            We create true masterpieces of medieval armors that reflect the best traditions of the past and meet modern quality standards.
          </p>
          <Link
            to="/helmets"
            className="mt-6 inline-block bg-red-800 px-6 py-2 rounded-lg hover:bg-red-700 text-white text-sm md:text-base"
          >
            View products
          </Link>
        </div>
        <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center">
  <img
    src={herofoto}
    alt="Armor"
    className="rounded-lg max-w-full h-auto object-contain"
  />
</div>
      </section>

      {/* Benefits Section */}
      <section className="bg-BG text-white py-6 mt-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shipping */}
          <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
            <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <div>
              <h3 className="font-bold text-base md:text-lg">Fast Worldwide Shipping</h3>
              <p className="text-xs md:text-sm text-gray-400">Delivering orders across Europe and the USA</p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <div>
              <h3 className="font-bold text-base md:text-lg">100% Money-Back Guarantee</h3>
              <p className="text-xs md:text-sm text-gray-400">Full refund if the product doesn’t fit your needs</p>
            </div>
          </div>

          {/* Support 24/7 */}
          <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
            <Headphones className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <div>
              <h3 className="font-bold text-base md:text-lg">24/7 Customer Support</h3>
              <p className="text-xs md:text-sm text-gray-400">We’re always here to help, any time, any day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">New Products</h2>
        <HelmetsCarousel />
      </section>
    </div>
  );
};

export default Home;
