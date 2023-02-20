import React from "react";
// import chair from "../assets/chair.png";
import Image from "next/image";

export default function Banner({ image }) {
  return (
    <div className="bg-[#f6f6f6] h-[570px] w-screen overflow-hidden px-32 flex items-center relative">
      <div className="flex-1 flex justify-between space-x-12">
        <div className="">
          <div className=" border-l  border-black pl-4">
            <span className="bg-[#3F3F3F] text-white p-2 rounded-sm">
              Upto 40% off on summer collection
            </span>
            <h2 className="font-semibold text-4xl mt-4">WE ARE FURNITA</h2>
            <p className="text-[#707070] text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie
            </p>
            <button className="bg-[#e97730] px-4 py-[8px] text-white text-xs mt-6 font-medium">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[600px] rounded-full bg-[#efefef] absolute -right-32 -bottom-40" />
      <div className="flex flex-1 items-center justify-end z-30">
        <Image src={image} width={415} height={415} />
      </div>
    </div>
  );
}
