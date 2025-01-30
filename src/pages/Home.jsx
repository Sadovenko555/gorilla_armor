import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white">
      

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">Feel the spirit of the Middle Ages with our unique armors</h1>
          <p className="mt-4 text-gray-400">We create true masterpieces of medieval armors that reflect the best traditions of the past and meet modern quality standards.</p>
          <Link to="/helms" className="mt-6 inline-block bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
          View products
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src="/assets/hero-image.jpg" alt="Armor" className="rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-4">New Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src="/assets/helm1.jpg" alt="Helm 1" className="rounded-lg shadow-lg"/>
          <img src="/assets/helm2.jpg" alt="Helm 2" className="rounded-lg shadow-lg"/>
          <img src="/assets/helm3.jpg" alt="Helm 3" className="rounded-lg shadow-lg"/>
          <img src="/assets/helm4.jpg" alt="Helm 4" className="rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-center">
        © 2025 Gorilla Armor.
      </footer>
    </div>
  );
};

export default Home;
