import React, { useEffect, useState } from "react";
import modelIMG from "../img/model1.jpg";

const ArticleIMG = () => {
  const [Time, SetTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      SetTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const day = String(Time.getDate()).padStart(2, "0");
  const month = String(Time.getMonth() + 1).padStart(2, "0");
  const year = Time.getFullYear();

  return (
    <>
      <div
        className="w-4/5  flex  pt-3 text-sm font-bold  justify-between  
        sm:text-base sm:font-normal
        md:text-lg   

      "
      >
        <div>
          In the whole ours show <br />
          is the designer's best look yet
        </div>
        <div>
          {day}.{month} <br />
          <div className="tracking-wider">{year}</div>
        </div>
      </div>
      <div
        className=" w-4/5 bg-LightBlack  mt-5  overflow-hidden flex  items-center  relative max-h-160
      
      "
      >
        <img
          src={modelIMG}
          className="opacity-60"
          alt="BestSellersModelPicture"
        />
      </div>
    </>
  );
};

export default ArticleIMG;
