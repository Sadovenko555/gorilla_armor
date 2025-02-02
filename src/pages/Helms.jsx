import { Link } from "react-router-dom";
import card1 from "/assets/p_card1.jpg";
import card2 from "/assets/p_card2.jpg";
import card3 from "/assets/p_card3.jpg";
import card4 from "/assets/p_card4.jpg";
const helms = [
  {
    id: 1,
    name: "Helmet",
    colors: "Steel | Gold",
    price: "2,000 €",
    image:  card1,
  },
  {
    id: 2,
    name: "Helmet",
    colors: "Black | Silver",
    price: "5,500 €",
    image: card2,
  },
  {
    id: 3,
    name: "Helmet",
    colors: "Bronze | Silver",
    price: "1,800 €",
    image: card3,
  },
  {
    id: 4,
    name: "Helmet",
    colors: "Red | Gold",
    price: "1,000 €",
    image: card4,
  },
];
const Helms = () => {
  return (
    <div className="min-h-screen bg-BG text-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-6">All Helmets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {helms.map((helm) => (
          <div
            key={helm.id}
            className="bg-head p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={helm.image}
              alt={helm.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">{helm.name}</h2>
            <p className="text-gray-400">{helm.colors}</p>
            <p className="text-lg font-semibold mt-2">{helm.price}</p>
            <Link
              to={`/product/${helm.id}`}
              className="block mt-4 text-center bg-red-800 hover:bg-blue-500 text-white py-2 rounded-md transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Helms;