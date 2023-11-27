import React from "react";
import { Link } from "react-router-dom";

const PreHeader = ({ CounterBasket }) => {
  return (
    <div
      className=" justify-between items-center  w-4/5 font-bold h-20 hidden
    lg:flex 
    "
    >
      <div className="w-1/4 xl:w-1/5 ">
        <ul className="flex justify-between ">
          <Link to={"/home"}>
            <li className="cursor-pointer">Home Page</li>
          </Link>
          <li className="cursor-pointer">Man</li>
          <li className="cursor-pointer">Woman</li>
        </ul>
      </div>
      <Link to={"/home"}>
        <div className="text-3xl font-black uppercase tracking-wider clas">
          Collective
        </div>
      </Link>
      <div className="className= w-1/4 xl:w-1/5">
        <ul className="flex justify-between ">
          <li className="cursor-pointer">Account</li>
          <li className="cursor-pointer">WishList</li>
          <Link to={"/Cart"}>
            <li className="cursor-pointer">Cart({CounterBasket})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default PreHeader;
