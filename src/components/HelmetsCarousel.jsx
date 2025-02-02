import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import helm1 from "/dist/assets/helm1.jpg";
import helm2 from "/dist/assets/helm2.jpg";
import helm3 from "/dist/assets/helm3.jpg";
import helm4 from "/dist/assets/helm4.jpg";

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
    <Swiper slidesPerView={4} spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]}>
      {helmets.map((helmet, index) => (
        <SwiperSlide key={index} className="flex justify-center !px-0 !mx-4">
          <img src={helmet.src} alt={helmet.alt} className="rounded-lg shadow-lg max-w-[250px] max-h-[250px]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HelmetsCarousel;
