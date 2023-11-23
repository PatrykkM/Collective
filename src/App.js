import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";
import SummerFashionSubpage from "./components/FashionCategory/FashionCategorySubpages/SummerFashionSubpage";
import ArtOfBeatFashionSubpage from "./components/FashionCategory/FashionCategorySubpages/ArtOfBeatSubpage";
import ClassicElegantFashionSubpage from "./components/FashionCategory/FashionCategorySubpages/ClassicElegantFashionSubpage";
import RetroFashionSubpage from "./components/FashionCategory/FashionCategorySubpages/RetroStyleFashionSubpage";
import StreetStyleFashionSubpage from "./components/FashionCategory/FashionCategorySubpages/StreetStyleFashionSubpage";
import SportyCasualFashionSubpage from "./components/FashionCategory/FashionCategorySubpages/SportyCasualFashionSubpage";
import { ProductsProvider } from "./components/ProductsProvider";

const App = () => {
  const [CounterBasket, SetCounterBasket] = useState(0);
  const [DisplayNumber, SetDisplayNumber] = useState(false);

  const [ModelBaskets, SetModelBaskets] = useState({
    model1: false,
    model2: false,
    model3: false,
    clothe1: false,
    clothe2: false,
    clotheSummerFasion1: false,
    clotheSummerFasion2: false,
    clotheSummerFasion3: false,
    clotheSummerFasion4: false,
    clotheSummerFasion5: false,
    clotheSummerFasion6: false,
    clotheArtOfBeatFashion1: false,
    clotheArtOfBeatFashion2: false,
    clotheArtOfBeatFashion3: false,
    clotheArtOfBeatFashion4: false,
    clotheArtOfBeatFashion5: false,
    clotheArtOfBeatFashion6: false,
    clotheClassicElegantFasionSubpage1: false,
    clotheClassicElegantFasionSubpage2: false,
    clotheClassicElegantFasionSubpage3: false,
    clotheClassicElegantFasionSubpage4: false,
    clotheClassicElegantFasionSubpage5: false,
    clotheClassicElegantFasionSubpage6: false,
    clotheRetroFashionSubpage1: false,
    clotheRetroFashionSubpage2: false,
    clotheRetroFashionSubpage3: false,
    clotheRetroFashionSubpage4: false,
    clotheRetroFashionSubpage5: false,
    clotheRetroFashionSubpage6: false,
    clotheStreetStyleSubpage1: false,
    clotheStreetStyleSubpage2: false,
    clotheStreetStyleSubpage3: false,
    clotheStreetStyleSubpage4: false,
    clotheStreetStyleSubpage5: false,
    clotheStreetStyleSubpage6: false,
    clotheSportyCasualSubpage1: false,
    clotheSportyCasualSubpage2: false,
    clotheSportyCasualSubpage3: false,
    clotheSportyCasualSubpage4: false,
    clotheSportyCasualSubpage5: false,
    clotheSportyCasualSubpage6: false,
  });

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
    <ProductsProvider>
      <div className="flex flex-col font-roboto bg-main justify-center items-center text-LightBlack overflow-hidden  min-w-314">
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <Home
                  CounterBasket={CounterBasket}
                  SetCounterBasket={SetCounterBasket}
                  DisplayNumber={DisplayNumber}
                  SetDisplayNumber={SetDisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                  SetModelBaskets={SetModelBaskets}
                />
              }
            />
            <Route
              path="/Cart"
              element={<Cart CounterBasket={CounterBasket} />}
            />
            <Route
              path="/SummerFashion"
              element={
                <SummerFashionSubpage
                  CounterBasket={CounterBasket}
                  DisplayNumber={DisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                />
              }
            />
            <Route
              path="/ArtOfBeatFashion"
              element={
                <ArtOfBeatFashionSubpage
                  CounterBasket={CounterBasket}
                  DisplayNumber={DisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                />
              }
            />
            <Route
              path="/ClassicElegantFashion"
              element={
                <ClassicElegantFashionSubpage
                  CounterBasket={CounterBasket}
                  DisplayNumber={DisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                />
              }
            />
            <Route
              path="/RetroFashion"
              element={
                <RetroFashionSubpage
                  CounterBasket={CounterBasket}
                  DisplayNumber={DisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                />
              }
            />
            <Route
              path="/StreetStyleFashion"
              element={
                <StreetStyleFashionSubpage
                  CounterBasket={CounterBasket}
                  DisplayNumber={DisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                />
              }
            />
            <Route
              path="/SportyCasualFashion"
              element={
                <SportyCasualFashionSubpage
                  CounterBasket={CounterBasket}
                  DisplayNumber={DisplayNumber}
                  AddToCart={AddToCart}
                  CardCounter={CardCounter}
                  ModelBaskets={ModelBaskets}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </ProductsProvider>
  );
};

export default App;
