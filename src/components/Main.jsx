import React from "react";
import ProductsMainRow1 from "./MainProducts/ProductsMainRow1";
import LatestArrivals from "./MainProducts/LatestArrivalsProducts";

import PreHeader from "./PreHeader";
import Header from "./Header";
import ArticleIMG from "./ArticleIMG";
import { Link } from "react-router-dom";
import { BiBasket } from "react-icons/bi";

const Main = ({
  SetCounterBasket,
  CounterBasket,
  DisplayNumber,
  SetDisplayNumber,
  AddToCart,
  CardCounter,
  ModelBaskets,
  SetModelBaskets,
}) => {
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
          <ProductsMainRow1
            CounterBasket={CounterBasket}
            DisplayNumber={DisplayNumber}
            SetDisplayNumber={SetDisplayNumber}
            AddToCart={AddToCart}
            CardCounter={CardCounter}
            ModelBaskets={ModelBaskets}
            SetModelBaskets={SetModelBaskets}
          />
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
          <LatestArrivals
            CounterBasket={CounterBasket}
            DisplayNumber={DisplayNumber}
            SetDisplayNumber={SetDisplayNumber}
            AddToCart={AddToCart}
            CardCounter={CardCounter}
            ModelBaskets={ModelBaskets}
            SetModelBaskets={SetModelBaskets}
          />
        </div>
        <Link to={"/Cart"} className={CounterBasket > 0 ? "block" : "hidden"}>
          <div className="fixed bottom-2 left-2  text-4xl  text-LightBlack bg-CardBrown  transition-all rounded-full w-16 h-16 flex justify-center items-center z-40 md:w-20 md:h-20 md:text-5xl lg:hidden">
            {DisplayNumber === false ? <BiBasket className="block " /> : null}
            {DisplayNumber === true ? (
              <div className="absolute font-semibold">{CounterBasket}</div>
            ) : null}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Main;
