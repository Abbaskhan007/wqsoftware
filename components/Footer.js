import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineGoogle,
  AiFillGithub,
} from "react-icons/ai";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="px-32 bg-[#F8F8F8] py-16 flex flex-col items-center">
      <Image height={32} width={120} src={logo} />
      <div className="flex items-center space-x-6 my-8">
        <AiFillLinkedin color="#707070" size={24} />
        <AiFillFacebook color="#707070" size={24} />
        <AiOutlineGoogle color="#707070" size={24} />
        <AiFillGithub color="#707070" size={24} />
      </div>
      <p className="text-sm text-[#707070] w-[650px] text-center mb-14">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper
      </p>
      <div className="flex justify-between items-center w-[800px] ">
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
      </div>
    </footer>
  );
}
