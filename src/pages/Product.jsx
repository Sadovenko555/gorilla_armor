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

   // Базовая цена
   const basePrice = 2000;
   const priceModifiers = {
     size: { S: 0, M: 100, L: 200, XL: 300 },
     metalType: { raw: 0, tempered: 40, stainless: 60 },
     thickness: { "2.0mm": 0, "2.5mm": 20, "3.0mm": 40 },
     padded: { no: 0, yes: 15 },
     aventail: { no: 0, yes: 25 },
   };
 
   const calculatePrice = () => {
     return (
       basePrice +
       priceModifiers.size[size] +
       priceModifiers.metalType[metalType] +
       priceModifiers.thickness[thickness] +
       priceModifiers.padded[padded] +
       priceModifiers.aventail[aventail]
     );
   };

  return (
    <div className="bg-BG text-FC min-h-screen p-4 md:p-10">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Галерея изображений */}
        <div className="flex gap-2 md:gap-4 items-start">
          {/* Миниатюры */}
          <div className="flex flex-col gap-2 max-w-[90px] md:max-w-none">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-[60px] h-[60px] md:w-20 md:h-20 object-cover object-center cursor-pointer border border-gray-600 rounded-md"
                onClick={() => setSelectedImage(img.src)}
              />
            ))}
          </div>
          {/* Главное изображение */}
          <div className="w-[300px] h-[300px] md:w-96 md:h-96 flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Helmet"
              className="w-full h-full object-cover border border-gray-600 rounded-lg"
            />
          </div>
        </div>

        {/* Опции товара */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Medieval Helmet</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Bascinet type helmet with the houndskull (dog-faced form) visor. Klappvisor (Kplappvisier) – it’s the way the visor is attached to the skull of the helmet. 
            This method was developed in Germany around c.1360-1370. The apex point of the conical skull is slightly moved back. 
            Such Houndskull Bascinets were the most spread helmets used by knights in Europe in c.1380-1420. The finest examples of this type of helmet can be found in the armor collection of the Churburg castle and Royal Armories.
          </p>

           {/* Цена */}
           <div className="text-2xl font-bold text-red-500">Price: ${calculatePrice()}</div>

          {/* Выбор параметров */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Size</label>
            <select
              className="bg-head text-white p-2 rounded-md w-full md:w-40"
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
              className="bg-head text-white p-2 rounded-md w-full md:w-40"
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
              className="bg-head text-white p-2 rounded-md w-full md:w-40"
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
              className="bg-head text-white p-2 rounded-md w-full md:w-40"
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
              className="bg-head text-white p-2 rounded-md w-full md:w-40"
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
