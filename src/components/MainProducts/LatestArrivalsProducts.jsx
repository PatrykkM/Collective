import React from "react";
import { useProductsContext } from "../ProductsProvider";

const LatestArrivals = ({ AddToCart, ModelBaskets, CardCounter }) => {
  const { getProductsByIdLatestArrivals, updateProductClicked } =
    useProductsContext();
  const products = getProductsByIdLatestArrivals();

  const CartHandler = (productId, index) => {
    updateProductClicked(productId);
    CardCounter(index);
  };

  return (
    <>
      {products.map((product, index) => {
        const propertyName = `${product.addtocart}`;
        const productAdd = index;

        return (
          <div className=" lg:w-1/2  lg:px-10 xl:px-28" key={product.id}>
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-max 
        
            "
              onClick={() => AddToCart(product.addtocart)}
            >
              <img
                src={product.img}
                className="opacity-80 cursor-pointer"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end 	 text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide cursor-pointer
              sm:text-4xl sm:tracking-wider
              lg:text-2xl lg:h-1/6
              xl:text-3xl
                ${ModelBaskets[propertyName] ? "" : "translate-y-full"}`}
                onClick={() => CartHandler(product.id, productAdd)}
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
              <div>{product.ProductName}</div>
              <div className="justify-end">${product.price}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LatestArrivals;
