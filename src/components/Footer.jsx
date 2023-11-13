import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-black mt-4 flex justify-center items-center tracking-widest">
      <div
        className="text-2xl text-white font-extrabold flex justify-center items-center
      md:text-3xl"
      >
        COLLECTIVE{" "}
        <div className="pl-1">
          <AiOutlineCopyrightCircle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
