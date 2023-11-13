import React from "react";
import PictureQ from "../img/photowithquote.jpg";

const PictureWithQuote = () => {
  return (
    <div className="w-4/5  hidden lg:flex  bg-LightBlack  mt-20  overflow-hidden  items-end   max-h-160 relative">
      <div className="bg-LightBlack  ">
        <img src={PictureQ} className=" opacity-50 " alt="MainModelPicture  " />
      </div>
      <div className="absolute font-light inset-0 flex items-center justify-center text-white text-4xl leading-relaxed  xl:text-5xl xl:leading-relaxed text-center">
        "Collective is a fashion shop with above average <br />
        quality and with a wide variety of clothing styles <br />
        from well-known designers"
      </div>
    </div>
  );
};

export default PictureWithQuote;
