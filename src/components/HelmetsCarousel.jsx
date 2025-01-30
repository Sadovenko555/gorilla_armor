import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const helmets = [
  { src: "/assets/helm1.jpg", alt: "Helm 1" },
  { src: "/assets/helm2.jpg", alt: "Helm 2" },
  { src: "/assets/helm3.jpg", alt: "Helm 3" },
  { src: "/assets/helm4.jpg", alt: "Helm 4" },
];

const HelmetsCarousel = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]}>
      {helmets.map((helmet, index) => (
        <SwiperSlide key={index} className="flex justify-center !px-0 !mx-0">
          <img src={helmet.src} alt={helmet.alt} className="rounded-lg shadow-lg max-w-[250px] max-h-[250px]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HelmetsCarousel;
