import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-24 bg-black mt-4 flex justify-center items-center tracking-widest">
      <div
        className="text-2xl text-white font-extrabold flex justify-center items-center
      md:text-3xl"
      >
        COLLECTIVE
        <div className="pl-1">
          <AiOutlineCopyrightCircle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
