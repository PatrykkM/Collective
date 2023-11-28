import React from "react";
import Header from "./Header";
import PreHeader from "./PreHeader";
import CartItems from "./CartItems";
import { calculateTotalPrice } from "./CartItems";

const Cart = ({ CounterBasket, SetCounterBasket }) => {
  const { useProductsContext } = require("./ProductsProvider");
  const { getCartItems } = useProductsContext();
  const cart = getCartItems();
  const { totalPrice: SubtotalCartPrice, totalItems } =
    calculateTotalPrice(cart);
  const TotalPrice = SubtotalCartPrice + 10;
  const DeleteCardCounter = () => {
    SetCounterBasket(CounterBasket - 1);
  };
  return (
    <>
      <PreHeader CounterBasket={CounterBasket} />
      <Header />
      <div className="w-4/5 mb-28 lg:flex lg:justify-between lg:mb-0">
        <div className="flex  items-center justify-center flex-col p-5 border-b border-LightBlack lg:hidden">
          <div className="text-2xl ">Cart</div>
          <div className="text-lg pt-px text-gray-500">
            {totalItems} Item{totalItems !== 1 ? "s" : ""} | $
            {SubtotalCartPrice}
          </div>
        </div>
        <div>
          <CartItems DeleteCardCounter={DeleteCardCounter} />
        </div>

        <div className="border-t border-LightBlack lg:w-1/2  lg:border-none lg:text-xl ">
          <div>
            <div className="text-2xl font-medium py-5 tracking-wide lg:py-4 lg:text-3xl">
              Summary
            </div>
          </div>
          <div className="flex  justify-between font-medium tracking-wide  lg:font-normal">
            <div>Subtotal</div>
            <div>${SubtotalCartPrice}</div>
          </div>
          <div className="flex  justify-between pt-2 font-medium tracking-wide lg:font-normal">
            <div>Estimated Shipping</div>
            <div>$10</div>
          </div>
          <div className="flex  justify-between pt-4 font-semibold tracking-wide pb-4 ">
            <div>Total</div>
            <div>${TotalPrice}</div>
          </div>
          <div className="hidden lg:h-24 lg:w-full   lg:bottom-0 lg:border-t lg:border-LightBlack lg:flex lg:items-center lg:justify-center lg:bg-main lg:relative ">
            <div className="bg-LightBlack text-white text-xl font-medium w-1/2 h-4/6  flex items-center justify-center rounded-full tracking-wide lg:text-2xl cursor-pointer">
              Go To Checkout
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 w-full  fixed bottom-0 border-t border-LightBlack flex items-center justify-center bg-main lg:relative lg:w-1/2 lg:hidden">
        <div className="bg-LightBlack text-white text-xl font-medium w-11/12 h-4/6  flex items-center justify-center rounded-full tracking-wide">
          Go To Checkout
        </div>
      </div>
    </>
  );
};

export default Cart;
