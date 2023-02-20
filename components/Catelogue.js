import Image from "next/image";
import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

export default function Catelogue() {
  return (
    <div className="px-32 grid grid-cols-4 h-[520px] gap-6 my-14">
      <div className="relative w-full h-full">
        <Image
          src={image1}
          alt="catelogue-image"
          layout="fill"
          className="cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-5 col-span-3 gap-6">
        <div className="relative w-full h-full col-span-3">
          <Image
            src={image2}
            alt="catelogue-image"
            layout="fill"
            className="cursor-pointer"
          />
        </div>
        <div className="relative w-full h-full col-span-2">
          <Image
            src={image3}
            alt="catelogue-image"
            layout="fill"
            className="cursor-pointer"
          />
        </div>
        <div className="relative w-full h-full col-span-2 bg-[#cccccc]">
          <Image
            src={image4}
            alt="catelogue-image"
            layout="fill"
            className="cursor-pointer"
          />
        </div>
        <div className="relative w-full h-full col-span-3 ">
          <Image
            src={image5}
            alt="catelogue-image"
            layout="fill"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
