import React, { useState } from "react";
import Model2JPG from "../img/model2.jpg";
import Model3JPG from "../img/model 3.jpg";
import Model4JPG from "../img/model4.jpg";
import Clothes1 from "../img/clothe1.jpg";
import Clothes2 from "../img/clothe2.jpg";
import PreHeader from "./PreHeader";
import Header from "./Header";
import ArticleIMG from "./ArticleIMG";

import { BiBasket } from "react-icons/bi";

const Main = () => {
  const [ModelBaskets, SetModelBaskets] = useState({
    model1: false,
    model2: false,
    model3: false,
    clothe1: false,
    clothe2: false,
  });
  const [CounterBasket, SetCounterBasket] = useState(0);
  const [DisplayNumber, SetDisplayNumber] = useState(false);
  const AddToCart = (action) => {
    SetModelBaskets({
      ...ModelBaskets,
      [action]: !ModelBaskets[action],
    });
  };
  const CardCounter = () => {
    SetCounterBasket(CounterBasket + 1);
    SetDisplayNumber(true);
    setTimeout(() => {
      SetDisplayNumber(false);
    }, 500);
  };

  return (
    <>
      <PreHeader CounterBasket={CounterBasket} />
      <Header />
      <ArticleIMG />
      <div className="w-4/5">
        <div
          className=" border-b-2 uppercase  border-black text-2xl font-black tracking-wider pt-7 pb-1 
      sm:text-3xl
      md:text-4xl md:pt-10 md:pb-2
      lg:text-6xl lg:mt-20
      xl:text-7xl 

      "
        >
          Best Sellers
        </div>
        <div className=" lg:flex justify-end items-end  ">
          <div className="  lg:w-1/3 lg:pr-6 xl:pr-20 ">
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative 
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-max 
        
            "
              onClick={() => AddToCart(`model1`)}
            >
              <img
                src={Model2JPG}
                className="opacity-80"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end 	 text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide
              sm:text-4xl sm:tracking-wider
              lg:text-xl lg:h-1/6
              xl:text-3xl xl:h-10%
              ${ModelBaskets.model1 ? "" : "translate-y-full"}`}
                onClick={CardCounter}
              >
                <div className="flex items-center mx-auto ">Add to cart</div>
              </div>
            </div>
            <div
              className=" flex pt-3 justify-between font-medium border-b pb-1 text-sm border-LightBlack
          sm:text-base
          md:text-2xl md:border-b
          lg:w-full lg:font-normal lg:pt-5 lg:pb-5 lg:text-lg 
          xl:text-xl
          "
            >
              <div>Modern black jacket</div>
              <div className="justify-end">$50</div>
            </div>
          </div>
          <div className=" lg:w-1/3  lg:px-3 xl:px-10  ">
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-max 
        
            "
              onClick={() => AddToCart(`model2`)}
            >
              <img
                src={Model3JPG}
                className="opacity-80 w-full"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end 	 text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide
              sm:text-4xl sm:tracking-wider
              lg:text-xl lg:h-1/6 
              xl:text-3xl xl:h-10% 
              ${ModelBaskets.model2 ? "" : "translate-y-full"}`}
                onClick={CardCounter}
              >
                <div className="flex items-center mx-auto ">Add to cart</div>
              </div>
            </div>
            <div
              className=" flex pt-3 justify-between font-medium border-b pb-1 text-sm border-LightBlack
          sm:text-base
          md:text-2xl md:border-b
          lg:w-full lg:font-normal lg:pt-5 lg:pb-5 lg:text-lg
          xl:text-xl
          "
            >
              <div>Red jersey </div>
              <div className="justify-end">$199</div>
            </div>
          </div>
          <div
            className="  lg:w-1/3  lg:pl-6 xl:pl-20 
       "
          >
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-full
        
            "
              onClick={() => AddToCart(`model3`)}
            >
              <img
                src={Model4JPG}
                className="opacity-80"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end 	 text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide
            sm:text-4xl sm:tracking-wider
              lg:text-xl lg:h-1/6
              xl:text-3xl xl:h-10%
              ${ModelBaskets.model3 ? "" : "translate-y-full"}`}
                onClick={CardCounter}
              >
                <div className="flex items-center mx-auto ">Add to cart</div>
              </div>
            </div>
            <div
              className=" flex pt-3 justify-between font-medium border-b pb-1 text-sm border-LightBlack
          sm:text-base
          md:text-2xl md:border-b
          lg:w-full lg:font-normal lg:pt-5 lg:pb-5 lg:text-lg
          xl:text-xl
          "
            >
              <div>Nike top</div>
              <div className="justify-end">$39</div>
            </div>
          </div>
        </div>
        <div
          className=" border-b-2 uppercase  border-black text-2xl font-black tracking-wider pt-7 pb-1
       sm:text-3xl
      md:text-4xl md:pt-10 md:pb-2
      lg:text-6xl lg:mt-8
      xl:text-7xl 
      
      "
        >
          latest arrivals
        </div>
        <div className=" lg:flex justify-between ">
          <div className=" lg:w-1/2  lg:px-10 xl:px-28">
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-max 
        
            "
              onClick={() => AddToCart(`clothe1`)}
            >
              <img
                src={Clothes1}
                className="opacity-80"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end 	 text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide
              sm:text-4xl sm:tracking-wider
              lg:text-lg lg:h-10%
              xl:text-3xl
              ${ModelBaskets.clothe1 ? "" : "translate-y-full"}`}
                onClick={CardCounter}
              >
                <div className="flex items-center mx-auto ">Add to cart</div>
              </div>
            </div>
            <div
              className=" flex pt-3 justify-between font-medium border-b pb-1 text-sm border-LightBlack
          sm:text-base
          md:text-2xl md:border-b
          lg:w-full lg:font-normal lg:pt-5 lg:pb-5
          "
            >
              <div>Modern black jacket</div>
              <div className="justify-end">$50</div>
            </div>
          </div>
          <div className=" lg:w-1/2 lg:px-10 xl:px-28">
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-max
        
            "
              onClick={() => AddToCart(`clothe2`)}
            >
              <img
                src={Clothes2}
                className="opacity-80"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end 	 text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide
              sm:text-4xl sm:tracking-wider
              lg:text-lg lg:h-10%
              xl:text-3xl
              ${ModelBaskets.clothe2 ? "" : "translate-y-full"}`}
                onClick={CardCounter}
              >
                <div className="flex items-center mx-auto ">Add to cart</div>
              </div>
            </div>
            <div
              className=" flex pt-3 justify-between font-medium border-b pb-1 text-sm border-LightBlack
          sm:text-base
          md:text-2xl md:border-b
          lg:w-full lg:font-normal lg:pt-5 lg:pb-5
          "
            >
              <div>Modern black jacket</div>
              <div className="justify-end">$50</div>
            </div>
          </div>
        </div>
        {CounterBasket > 0 ? (
          <div className="fixed bottom-2 left-2  text-4xl  text-LightBlack bg-CardBrown  transition-all rounded-full w-16 h-16 flex justify-center items-center z-40 md:w-20 md:h-20 md:text-5xl lg:hidden">
            {DisplayNumber === false ? <BiBasket className="block " /> : null}
            {DisplayNumber === true ? (
              <div className="absolute font-semibold">{CounterBasket}</div>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Main;
