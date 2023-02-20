import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import productsData from "../assets/productData";
import ProductCard from "./ProductCard";

export default function Featured({title}) {
  console.log("Product Data", productsData);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="px-32 ">
      <div className="flex items-center space-x-3">
        <h3 className="text-lg tracking-[2px] font-semibold text-md">
          {title}
        </h3>
        <div className="flex-1 bg-gray-300 h-[1.5px]" />
        <div className="flex space-x-4">
          <div
            onClick={slideLeft}
            className="border border-gray-300 w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <BsChevronLeft style={{ stroke: "#6b7280", strokeWidth: "1" }} />
          </div>
          <div
            onClick={slideRight}
            className="border border-gray-300 w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <BsChevronRight style={{ stroke: "#6b7280", strokeWidth: "1" }} />
          </div>
        </div>
      </div>
      <div
        id="slider"
        className="flex overflow-x-scroll space-x-6 mt-4 scroll-smooth "
      >
        {productsData.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            width="240px"
            height="240px"
          />
        ))}
      </div>
    </div>
  );
}
