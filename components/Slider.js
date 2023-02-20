import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import product1 from "../assets/product1.png";
import Banner from "./Banner";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import { carouselData } from "../assets/productData";

export default function Slider({ children: slides }) {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const prev = () =>
    setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="overflow-x-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-8">
        <Image onClick={prev} width={50} height={50} src={left} />
        <Image onClick={next} width={20} height={20} src={right} />
      </div>
      <div className="absolute bottom-12 left-32 space-x-2 flex">
        {carouselData.map((item, index) => (
          <span
            key={index}
            className={`${
              index === curr ? "w-[34px] bg-[#e97730]" : "w-5 bg-[#3F3F3F]"
            }  h-[2px] transition-all`}
          />
        ))}
      </div>
    </div>
  );
}
