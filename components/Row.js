import React, { useState } from "react";
import Image from "next/image";
import row from "../assets/row.png";
import { AiOutlineHeart } from "react-icons/ai";

export default function Row() {
  const [count, setCount] = useState(0);
  const [activeColor, setActiveColor] = useState("black");
  const onChangeCount = val => {
    if (val == -1 && count == 0) {
      return;
    }
    setCount(count + val);
  };
  return (
    <div className="flex px-32 space-x-4 my-24">
      <div className="relative  flex-1">
        <Image layout="responsive" alt="row-image" src={row} />
      </div>
      <div className="flex-1 py-4">
        <h4 className="text-[26px] font-semibold">
          Modern Sofa for office and Home
        </h4>
        <div className="flex space-x-8 items-center my-8">
          <span className="text-[16px] font-semibold">$35.00</span>
          <span className="text-gray-400 text-sm line-through">50 $</span>
        </div>
        <p className="text-[#707070] text-[13px] my-12">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nunc finibus sit amet ligula id gravida. Curabitur quis
          orci non leo varius dapibus in ornare tortorparturient montes.
        </p>
        <div className="flex h-[50px] items-center space-x-4">
          <div className="flex border border-gray-300 space-x-4 h-full px-[6px] items-center ">
            <button onClick={() => onChangeCount(1)}>+</button>
            <span className="text-[20px]">{count}</span>
            <button onClick={() => onChangeCount(-1)}>-</button>
          </div>
          <button className="bg-black text-white text-lg font-semibold h-full px-10">
            ADD TO CART
          </button>
          <button className=" border border-gray-300 h-full px-4">
            <AiOutlineHeart size={22} />
          </button>
        </div>
        <div className="flex items-center space-x-16 mt-10">
          <span className="text-[#3F3F3F] text-sm font-[400]">COLOR:</span>
          <div className="flex space-x-2 items-center">
            <div
              onClick={() => setActiveColor("black")}
              className={`w-6 h-6 ${
                activeColor === "black" && " border-black border p-[3px] "
              }`}
            >
              <p className={`bg-black w-full h-full`} />
            </div>
            <div
              onClick={() => setActiveColor("white")}
              className={`w-6 h-6 ${
                activeColor === "white" && " border-black border p-[3px] "
              }`}
            >
              <p className={`bg-[#EEEEEE] w-full h-full`} />
            </div>
            <div
              onClick={() => setActiveColor("gray")}
              className={`w-6 h-6 ${
                activeColor === "gray" && " border-black border p-[3px] "
              }`}
            >
              <p className={`bg-[#B7B4B3] w-full h-full`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
