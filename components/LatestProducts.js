import Image from "next/image";
import React from "react";
import latest1 from "../assets/latest1.png";
import ProductCard from "./ProductCard";
import { latesProducts } from "../assets/productData";
import LatestProductCard from "./LatestProductCard";

export default function LatestProducts() {
  return (
    <div className="px-32 mb-20">
      <h3 className="text-[#3F3F3F] tracking-[2px] font-semibold text-2xl text-center mt-14 mb-6">
        LATEST PRODUCTS
      </h3>
      <div className="flex items-center mb-8 space-x-2 justify-center">
        <span className="bg-gray-300 w-16 h-[2px]" />
        <span className="h-3 w-3 rounded-full border-[#e97730] border-4" />
        <span className="bg-gray-300 w-16 h-[2px]" />
      </div>
      <div className="grid grid-cols-3 h-[675px] gap-6">
        <Image src={latest1} height="100%" width="100%" />
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {latesProducts.map(item => (
            <LatestProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
