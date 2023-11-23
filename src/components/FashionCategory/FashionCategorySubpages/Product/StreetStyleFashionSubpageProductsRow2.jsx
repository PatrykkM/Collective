import React from "react";
import { useProductsContext } from "../../../ProductsProvider";

const StreetStyleFashionSubpageProductsRow2 = ({
  AddToCart,
  ModelBaskets,
  CardCounter,
}) => {
  const { getProductsByIdStreetStyle2, updateProductClicked } =
    useProductsContext();
  const products = getProductsByIdStreetStyle2();

  const CartHandler = (productId, index) => {
    updateProductClicked(productId);
    CardCounter(index);
  };

  return (
    <>
      {products.map((product, index) => {
        const isLastItem = index === products.length - 1;
        const MiddleItem = index === products.length - 2;
        const propertyName = `${product.addtocart}`;
        const productAdd = index;

        return (
          <div
            key={product.id}
            className={`lg:w-1/3 ${
              isLastItem
                ? "lg:pl-6 xl:pl-20"
                : MiddleItem
                ? "lg:px-3 xl:px-10"
                : "lg:pr-6 xl:pr-20"
            }`}
          >
            <div
              className=" bg-LightBlack  mt-5  h-80   overflow-hidden flex  items-center  relative 
            sm:h-112
            md:h-160 md:mt-10
            lg:w-full lg:h-max lg:min-h-80
            "
              onClick={() => AddToCart(product.addtocart)}
            >
              <img
                src={product.img}
                className="opacity-80 cursor-pointer"
                alt="BestSellersModelPicture"
              />
              <div
                className={`bg-LightBlack self-end text-white transition w-full absolute h-1/5 flex font-light text-2xl tracking-wide cursor-pointer
              sm:text-4xl sm:tracking-wider
              lg:text-xl lg:h-1/6
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
          lg:w-full lg:font-normal lg:pt-5 lg:pb-5 lg:text-lg 
          xl:text-xl
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

export default StreetStyleFashionSubpageProductsRow2;
