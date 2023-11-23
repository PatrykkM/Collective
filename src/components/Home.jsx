import React from "react";
import Main from "./Main";
import PictureWithQuote from "./PictureWithQuote";
import FashionCategory from "./FashionCategory";
import Footer from "./Footer";

const Home = ({
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
      <Main
        CounterBasket={CounterBasket}
        SetCounterBasket={SetCounterBasket}
        DisplayNumber={DisplayNumber}
        SetDisplayNumber={SetDisplayNumber}
        AddToCart={AddToCart}
        CardCounter={CardCounter}
        ModelBaskets={ModelBaskets}
        SetModelBaskets={SetModelBaskets}
      />
      <PictureWithQuote />
      <FashionCategory />
      <Footer />
    </>
  );
};

export default Home;
