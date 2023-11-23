import React from "react";
import SummerFashionSubpage from "./FashionCategory/SummerFashion";
import ArtOfBeatFashionSubpage from "./FashionCategory/ArtOfBeatFashion";
import RetroFashionSubpage from "./FashionCategory/RetroFashion";
import ClassicElegantFashionSubpage from "./FashionCategory/ClassicElegantFashion";
import StreetStyleFashionSubpage from "./FashionCategory/StreetStyleFashion";
import SportyCasualFasionsSubpage from "./FashionCategory/SportyCasualFasion";

const FashionCategory = () => {
  return (
    <div className="w-4/5 ">
      <div
        className=" border-b-2 uppercase  border-black text-2xl font-black tracking-wider pt-7 pb-1 sm:text-3xl
      md:text-4xl md:pt-10 md:pb-2
      lg:text-6xl lg:mt-20 lg:tracking-wider
      xl:text-7xl 
      "
      >
        Fashion category
      </div>
      <div className="">
        <div className="lg:flex lg:flex-row   justify-center items-center  ">
          <SummerFashionSubpage />
          <ArtOfBeatFashionSubpage />
        </div>
        <div className="lg:flex flex-row  justify-center items-center  ">
          <RetroFashionSubpage />
          <ClassicElegantFashionSubpage />
        </div>
        <div className="lg:flex lg:flex-row   justify-center items-center  ">
          <StreetStyleFashionSubpage />
          <SportyCasualFasionsSubpage />
        </div>
      </div>
    </div>
  );
};

export default FashionCategory;
