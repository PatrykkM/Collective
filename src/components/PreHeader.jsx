import React from "react";

const PreHeader = (props) => {
  return (
    <div
      className=" justify-between items-center  w-4/5 font-bold h-20 hidden
    lg:flex
    "
    >
      <div className="w-1/4 xl:w-1/5 ">
        <ul className="flex justify-between ">
          <li className="cursor-pointer">Man</li>
          <li className="cursor-pointer">Woman</li>
          <li className="cursor-pointer">Children</li>
        </ul>
      </div>
      <div className="text-3xl font-black uppercase tracking-wider clas">
        Collective
      </div>
      <div className="className= w-1/4 xl:w-1/5">
        <ul className="flex justify-between ">
          <li className="cursor-pointer">Account</li>
          <li className="cursor-pointer">WishList</li>
          <li className="cursor-pointer">Cart({props.CounterBasket})</li>
        </ul>
      </div>
    </div>
  );
};

export default PreHeader;
