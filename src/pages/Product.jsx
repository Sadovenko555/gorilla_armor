import { useState, useMemo } from "react";
import helm1 from "/assets/helm1.jpg";
import helm2 from "/assets/helm2.jpg";
import helm3 from "/assets/helm3.jpg";
import helm4 from "/assets/helm4.jpg";

const basePrice = 200;

const priceModifiers = {
  size: { S: 0, M: 20, L: 40, XL: 60 },
  metalType: { raw: 0, tempered: 50, stainless: 80 },
  thickness: { "2.0mm": 0, "2.5mm": 30, "3.0mm": 60 },
  padded: { no: 0, yes: 40 },
  aventail: { no: 0, yes: 70 },
};

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

  const totalPrice = useMemo(() => {
    return (
      basePrice +
      priceModifiers.size[size] +
      priceModifiers.metalType[metalType] +
      priceModifiers.thickness[thickness] +
      priceModifiers.padded[padded] +
      priceModifiers.aventail[aventail]
    );
  }, [size, metalType, thickness, padded, aventail]);

  return (
    <div className="bg-BG text-FC min-h-screen p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Галерея изображений */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-16 h-16 md:w-20 md:h-20 cursor-pointer border border-gray-600 rounded-md"
                onClick={() => setSelectedImage(img.src)}
              />
            ))}
          </div>
          <img
            src={selectedImage}
            alt="Helmet"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-lg border border-gray-600"
          />
        </div>

        {/* Опции товара */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">Medieval Helmet</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Bascinet type helmet with the houndskull visor. Developed in Germany around 1360-1370. Used by knights in Europe (1380-1420). Finest examples in Churburg Castle and Royal Armories.
          </p>

          {/* Цена */}
          <div className="text-xl md:text-2xl font-bold text-red-600">
            ${totalPrice}
          </div>

          {/* Выбор параметров */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Size</label>
            <select
              className="bg-head text-white p-2 rounded-md w-40"
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
              className="bg-head text-white p-2 rounded-md w-40"
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
              className="bg-head text-white p-2 rounded-md w-40"
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
              className="bg-head text-white p-2 rounded-md w-40"
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
              className="bg-head text-white p-2 rounded-md w-40"
              value={aventail}
              onChange={(e) => setAventail(e.target.value)}
            >
              <option value="no">Without Aventail</option>
              <option value="yes">With Aventail</option>
            </select>
          </div>

          {/* Кнопка добавить в корзину */}
          <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-bold w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
