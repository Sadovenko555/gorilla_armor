import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import helm1 from "/assets/helm1.jpg";
import helm2 from "/assets/helm2.jpg";
import helm3 from "/assets/helm3.jpg";
import helm4 from "/assets/helm4.jpg";

const helmets = [
  { src: helm1, alt: "Helm 1" },
  { src: helm2, alt: "Helm 2" },
  { src: helm3, alt: "Helm 3" },
  { src: helm4, alt: "Helm 4" },
  { src: helm1, alt: "Helm 1" },
  { src: helm2, alt: "Helm 2" },
  { src: helm3, alt: "Helm 3" },
  { src: helm4, alt: "Helm 4" },
];

const HelmetsCarousel = () => {
  return (
    <Swiper
  pagination={{ clickable: true }}
  modules={[Pagination]}
  spaceBetween={20}
  loop={true} // 🔥 Бесконечная прокрутка
  centeredSlides={true}
  breakpoints={{
    320: { slidesPerView: 2, spaceBetween: 10 }, // 1 изображение на очень маленьких экранах
    480: { slidesPerView: 2, spaceBetween: 15 }, // 2 изображения на мобилках
    768: { slidesPerView: 3, spaceBetween: 20 }, // 3 изображения на планшетах
    1024: { slidesPerView: 4, spaceBetween: 20 }, // 4 изображения на десктопе
  }}
>
      {helmets.map((helmet, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <img
            src={helmet.src}
            alt={helmet.alt}
            className="rounded-lg shadow-lg w-[180px] h-[180px] md:w-[250px] md:h-[250px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HelmetsCarousel;
