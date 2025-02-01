import { Link } from "react-router-dom";
import HelmetsCarousel from "../components/HelmetsCarousel";

const Home = () => {
  return (
    <div className="bg-BG text-FC pl-10 pr-10 ">
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
          <img src="/assets/hero-image.jpg" alt="Armor" className="rounded-lg"/>
        </div>
      </section>

      <section className="bg-BG text-white p-6 mt-6">    
  <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 ">
    {/* Shipping */}
    <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m11 7h-4m-4 4h8m0 0v4m0-4l-4-4" />
      </svg>
      <div>
        <h3 className="font-bold text-lg">Fast Worldwide Shipping</h3>
        <p className="text-sm text-gray-400">Delivering orders across Europe and the USA</p>
      </div>
    </div>

    {/* Guarantee */}
    <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-4.418 0-8 2.686-8 6 0 2.347 1.563 4.351 3.76 5.395M16 4c-4.418 0-8 2.686-8 6 0 2.347 1.563 4.351 3.76 5.395M12 12v.01" />
      </svg>
      <div>
        <h3 className="font-bold text-lg">100% Money-Back Guarantee</h3>
        <p className="text-sm text-gray-400">Full refund if the product doesn’t fit your needs</p>
      </div>
    </div>

    {/* Support 24/7 */}
    <div className="flex items-center space-x-4 p-4 bg-head rounded-lg">
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <h3 className="font-bold text-lg">24/7 Customer Support</h3>
        <p className="text-sm text-gray-400">We’re always here to help, any time, any day</p>
      </div>
    </div>
  </div>
</section>


      {/* Carousel Section */}
      <section className="p-12">
        <h2 className="text-2xl font-bold text-center mb-4 p-8">New Products</h2>
        <HelmetsCarousel />
      </section>

      
    </div>
  );
};

export default Home;
