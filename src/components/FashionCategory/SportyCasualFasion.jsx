import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import SportyCasualFasion from "../../img/SportFashion.jpg";
import { Link } from "react-router-dom";

const SportyCasualFasionsSubpage = () => {
  return (
    <div className="  lg:w-3/5   ">
      <div className=" bg-LightBlack  mt-5  overflow-hidden flex  items-center  relative  ">
        <div className="overflow-hidden  flex justify-center items-center  lg:h-48 photoChangeXS:h-56 xl:h-60 photoChange:h-80">
          <img
            src={SportyCasualFasion}
            className="opacity-90  w-full"
            alt="SummerFashionPicture"
          />
        </div>
      </div>
      <Link to={"/SportyCasualFashion"}>
        <div
          className=" flex pt-3 justify-between font-bold border-b pb-1 text-sm border-LightBlack
              sm:text-base
              md:text-lg
              lg:text-xl lg:font-medium
              "
        >
          <div className="lg:pb-2">06</div>
        </div>
        <div
          className="flex font-extrabold justify-between pt-2 sm:text-lg
               md:text-xl
               lg:text-xl lg:font-normal lg:mt-2
               xl:text-2xl
               "
        >
          <div>Sporty Casual Style</div>
          <div className="flex  items-center ">
            Explore
            <div className="text-sm font-extrabold mb-px ml-2 sm:mb-0">
              <ImArrowUpRight2 />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SportyCasualFasionsSubpage;
