import Image from "next/image";
import React from "react";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function LatestProductCard({ product }) {
  return (
    <div>
      <div className="relative w-full h-[80%] group">
        <Image
          alt="catelogue-image"
          layout="fill"
          className="cursor-pointer"
          src={product.source}
        />
        <div className="absolute hidden group-hover:flex items-center justify-center inset-0 space-x-3">
          <div className="bg-white p-2 cursor-pointer">
            <AiOutlineHeart style={{ strokeWidth: "4" }} size={22} />
          </div>
          <div className="bg-white p-2 cursor-pointer">
            <AiOutlineEye style={{ strokeWidth: "4" }} size={22} />
          </div>
        </div>
        <div className="absolute hidden group-hover:flex items-center justify-center bg-black space-x-4 w-full bottom-0 py-[6px] cursor-pointer">
          <AiOutlineShoppingCart color="#fff" size={20} />
          <p className="text-white text-sm font-light">Add to cart</p>
        </div>
      </div>
      <p className="text-[16px] font-semibold text-[rgb(63,63,63)] mt-4">
        {product.name}
      </p>
      <div className="flex space-x-3 items-center mt-1">
        <p
          className={`${
            product.discountPrice
              ? "line-through text-sm font-medium"
              : " text-[16px] font-semibold "
          }`}
        >
          ${product.price}
        </p>
        {product.discountPrice && (
          <p className="text-[16px] font-semibold  text-[#e97730]">
            ${product.discountPrice}
          </p>
        )}
      </div>
    </div>
  );
}
