import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="flex flex-row bg-white h-[60px] items-center space-x-20 px-32">
      <Image src={logo} width={118} height={20} />
      <div className="flex flex-row space-x-8 flex-1">
        <p className="text-[#707070] text-sm font-medium">HOME</p>
        <p className="text-[#707070] text-sm  font-medium">SHOP</p>
        <p className="text-[#707070] text-sm  font-medium">Contact Us</p>
        <p className="text-[#707070] text-sm  font-medium">ABOUT US</p>
      </div>
      <div className="flex space-x-4">
        <AiOutlineSearch color="#707070" size={22} />
        <AiOutlineShoppingCart color="#707070" size={22} />
        <CgProfile color="#707070" size={22} />
      </div>
    </div>
  );
}
