import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useProductsContext } from "./ProductsProvider";

export const calculateTotalPrice = (cart) => {
  const total = cart.reduce(
    (accumulator, product) => {
      if (typeof product.price === "number" && product.clicked > 0) {
        accumulator.totalPrice += product.price * product.clicked;
        accumulator.totalItems += product.clicked;
      }
      return accumulator;
    },
    { totalPrice: 0, totalItems: 0 }
  );

  return total;
};

const CartItems = ({ DeleteCardCounter }) => {
  const { getCartItems, deleteProduct } = useProductsContext();
  const cart = getCartItems();
  const RemoveProductFromCart = (productId) => {
    deleteProduct(productId);
    DeleteCardCounter();
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        cart.map((product) =>
          product.clicked > 0 ? (
            <div className="flex py-5 " key={product.id}>
              <div className="w-26 h-36 lg:w-28 lg:h-40">
                <img src={product.img} alt="Item" className="w-full h-full " />
              </div>
              <div className="pl-4 ">
                <div className="font-semibold">${product.price}</div>
                <div className="font-semibold">{product.ProductName}</div>
                <div className="font-medium text-gray-400">
                  Quantity: {product.clicked}
                </div>
                <div
                  className="pt-2 text-2xl"
                  onClick={() => RemoveProductFromCart(product.id)}
                >
                  <FaRegTrashAlt />
                </div>
              </div>
            </div>
          ) : null
        )
      ) : (
        <div className="text-3xl  h-112 w-4/5 flex justify-center items-center m-auto">
          Your cart is empty.
        </div>
      )}
    </>
  );
};

export default CartItems;
