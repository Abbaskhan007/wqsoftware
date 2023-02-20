import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Top1() {
  return (
    <div className="flex flex-row bg-[#F5F3F3] w-full h-[36px] space-x-6 px-32 items-center">
      <div className="flex space-x-3">
        <AiOutlineMail color="#e97730" />
        <p className="text-xs text-[#707070]">contact@fornita.com</p>
      </div>
      <div className="flex space-x-3">
        <AiOutlinePhone color="#e97730" />
        <p className="text-xs text-[#707070]">+92333 4400739</p>
      </div>
      <div className="flex space-x-3">
        <GoLocation color="#e97730" />
        <p className="text-xs text-[#707070]">
          University road, Peshawer Pakistan
        </p>
      </div>
      <div className="flex-1">
        <p className="text-xs text-[#707070] flex justify-end">WishList</p>
      </div>
    </div>
  );
}
