import React from "react";
import ImageWithText from "./ImageWithText";
import image1 from "../assets/imageRow1.png";
import image2 from "../assets/imageRow2.png";
import image3 from "../assets/imageRow3.png";

export default function ImageRow() {
  return (
    <div className="grid grid-cols-4 gap-8 w-full h-[260px] px-32 mt-16">
      <ImageWithText
        image={image1}
        text="Bedroom Sofa"
        description="Furnita Collection"
      />
      <div className="col-span-2 h-full w-full">
        <ImageWithText
          image={image2}
          text="Study Table and Chair"
          description="Furnita Collection"
        />
      </div>
      <ImageWithText
        image={image3}
        text="Office Chair"
        description="Furnita Collection"
      />
    </div>
  );
}
