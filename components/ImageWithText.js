import Image from "next/image";
import React from "react";

export default function ImageWithText({ image, text, description }) {
  return (
    <div className="relative w-full h-full">
      <Image alt={`banner-image-${text}`} fill src={image} />
      <div className="absolute top-4 left-4">
        <h6 className="text-[#3F3F3F] text-lg font-semibold">{text}</h6>
        <p className="text-[#3F3F3F] text-sm font-thin">{description}</p>
      </div>
    </div>
  );
}
