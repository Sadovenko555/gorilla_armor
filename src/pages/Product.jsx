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
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
        {/* Галерея изображений */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-20 h-20 cursor-pointer border border-gray-600 rounded-md object-cover"
                onClick={() => setSelectedImage(img.src)}
              />
            ))}
          </div>
          <div className="w-80 h-80 border border-gray-600 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Helmet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Опции товара */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Medieval Helmet</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bascinet type helmet with the houndskull (dog-faced form) visor...
          </p>

          {/* Выборы параметров */}
          {[
            { label: "Size", value: size, setValue: setSize, options: ["S", "M", "L", "XL"] },
            { label: "Metal Type", value: metalType, setValue: setMetalType, options: ["Raw Steel", "Tempered Steel", "Stainless Steel"] },
            { label: "Steel Thickness", value: thickness, setValue: setThickness, options: ["2.0mm", "2.5mm", "3.0mm"] },
            { label: "Padded Liner", value: padded, setValue: setPadded, options: ["Without Padding", "With Padding"] },
            { label: "Aventail", value: aventail, setValue: setAventail, options: ["Without Aventail", "With Aventail"] },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="text-lg">{item.label}</label>
              <select
                className="bg-head text-white p-2 rounded-md w-40"
                value={item.value}
                onChange={(e) => item.setValue(e.target.value)}
              >
                {item.options.map((opt, i) => (
                  <option key={i} value={opt.toLowerCase()}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

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
