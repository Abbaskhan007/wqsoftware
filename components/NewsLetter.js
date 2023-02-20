import React, { useState } from "react";
import news from "../assets/new1.png";
import Image from "next/image";

export default function NewsLetter() {
  const [text, setText] = useState("");
  const onSubscribe = () => {
    setText("");
    alert("Subscribed Successfully");
  };
  return (
    <div className="flex px-32 my-12">
      <div className="relative h-[420px] w-[360px]">
        <Image src={news} layout="fill" />
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <div>
            <p className="text-white text-lg font-medium">WE ARE</p>
            <p className="text-white text-3xl font-bold">FURNITA</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] h-[290px] pl-20 w-full py-8 my-auto pr-8">
        <h3 className="text-3xl text-[#3F3F3F]">NEWSLETTER</h3>
        <p className="text-[#707070] text-lg font-light">
          Subscribe for latest stories and promotions
        </p>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="bg-white px-6 py-3 w-full my-8 outline-none border-none"
          placeholder="Enter your Email"
        />
        <button
          onClick={onSubscribe}
          className="bg-[#e97730] text-white text-lg font-semibold px-6 py-3"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
