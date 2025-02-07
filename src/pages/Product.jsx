import { useState } from "react";
import helm1 from "/assets/helm1.jpg";
import helm2 from "/assets/helm2.jpg";
import helm3 from "/assets/helm3.jpg";
import helm4 from "/assets/helm4.jpg";

const Product = () => {
  const images = [
    { src: helm1, alt: "Helm 1" },
    { src: helm2, alt: "Helm 2" },
    { src: helm3, alt: "Helm 3" },
    { src: helm4, alt: "Helm 4" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);
  const [size, setSize] = useState("M");
  const [metalType, setMetalType] = useState("raw");
  const [thickness, setThickness] = useState("2.0mm");
  const [padded, setPadded] = useState("no");
  const [aventail, setAventail] = useState("no");

  return (
    <div className="bg-BG text-FC min-h-screen p-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Галерея изображений */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-20 h-20 cursor-pointer border border-gray-600 rounded-md"
                onClick={() => setSelectedImage(img.src)}
              />
            ))}
          </div>
          <img src={selectedImage} alt="Helmet" className="w-96 h-auto rounded-lg border border-gray-600" />
        </div>

        {/* Опции товара */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Medieval Helmet</h1>
          <p className="text-gray-400">
            Crafted with the highest quality steel, our medieval helmets offer both authenticity and protection.
          </p>

          {/* Выборы параметров */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Size</label>
            <select
              className="bg-head text-white p-2 rounded-md"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">Metal Type</label>
            <select
              className="bg-head text-white p-2 rounded-md"
              value={metalType}
              onChange={(e) => setMetalType(e.target.value)}
            >
              <option value="raw">Raw Steel</option>
              <option value="tempered">Tempered Steel</option>
              <option value="stainless">Stainless Steel</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">Steel Thickness</label>
            <select
              className="bg-head text-white p-2 rounded-md"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
            >
              <option value="2.0mm">2.0mm</option>
              <option value="2.5mm">2.5mm</option>
              <option value="3.0mm">3.0mm</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">Padded Liner</label>
            <select
              className="bg-head text-white p-2 rounded-md"
              value={padded}
              onChange={(e) => setPadded(e.target.value)}
            >
              <option value="no">Without Padding</option>
              <option value="yes">With Padding</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">Aventail</label>
            <select
              className="bg-head text-white p-2 rounded-md"
              value={aventail}
              onChange={(e) => setAventail(e.target.value)}
            >
              <option value="no">Without Aventail</option>
              <option value="yes">With Aventail</option>
            </select>
          </div>

          {/* Кнопка добавить в корзину */}
          <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
