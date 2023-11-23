import PreHeader from "../../PreHeader";
import Footer from "../../Footer";
import { BiBasket } from "react-icons/bi";
import { Link } from "react-router-dom";
import ClassicElegantFashionSubpageProductsRow1 from "./Product/ClassicElegantFashionSubpageProductsRow1";
import ClassicElegantFashionSubpageProductsRow2 from "./Product/ClassicElegantFashionSubpageProductsRow2";

const ClassicElegantFashionSubpage = ({
  CounterBasket,
  DisplayNumber,
  AddToCart,
  CardCounter,
  ModelBaskets,
}) => {
  return (
    <>
      <PreHeader CounterBasket={CounterBasket} />
      <div
        className="border-y-2 uppercase  border-black text-4xl font-black tracking-widest   w-4/5 text-center mt-5  p-2
      sm:text-6xl 
      md:text-7xl
      lg:hidden
     

      "
      >
        Collective
      </div>
      <Link to={"/Cart"} className={CounterBasket > 0 ? "block" : "hidden"}>
        <div className="fixed bottom-2 left-2  text-4xl  text-LightBlack bg-CardBrown  transition-all rounded-full w-16 h-16 flex justify-center items-center z-40 md:w-20 md:h-20 md:text-5xl lg:hidden">
          {DisplayNumber === false ? <BiBasket className="block " /> : null}
          {DisplayNumber === true ? (
            <div className="absolute font-semibold">{CounterBasket}</div>
          ) : null}
        </div>
      </Link>
      <div className="w-4/5 lg:border-t-2 lg:border-LightBlack">
        <div className=" lg:flex justify-end items-end lg:pb-7  ">
          <ClassicElegantFashionSubpageProductsRow1
            AddToCart={AddToCart}
            CardCounter={CardCounter}
            ModelBaskets={ModelBaskets}
          />
        </div>
        <div className=" lg:flex justify-end items-end pb-7   ">
          <ClassicElegantFashionSubpageProductsRow2
            AddToCart={AddToCart}
            CardCounter={CardCounter}
            ModelBaskets={ModelBaskets}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClassicElegantFashionSubpage;
