import React, { useState } from "react";
import Model2JPG from "../../../../../img/ArtOfBeatFashionSubpage5.jpg";
import Model3JPG from "../../../../../img/model 3.jpg";
import Model4JPG from "../../../../../img/model4.jpg";
import ArtOfBeatFashionSubpageModel1 from "../../../../../img/ArtOfBeatFashionSubpage1.jpg";
import ArtOfBeatFashionSubpageModel2 from "../../../../../img/ArtOfBeatFashionSubpage2.jpg";
import ArtOfBeatFashionSubpageModel3 from "../../../../../img/ArtOfBeatFashionSubpage3.jpg";
import ArtOfBeatFashionSubpageModel4 from "../../../../../img/ArtOfBeatFashionSubpage4.jpg";
import ArtOfBeatFashionSubpageModel5 from "../../../../../img/model2.jpg";
import ArtOfBeatFashionSubpageModel6 from "../../../../../img/ArtOfBeatFashionSubpage6.jpg";
import ClassicElegantFashionSubpageModel1 from "../../../../../img/ClassicElegantFasionSubpage1.jpg";
import ClassicElegantFashionSubpageModel2 from "../../../../../img/ClassicElegantFasionSubpage2.jpg";
import ClassicElegantFashionSubpageModel3 from "../../../../../img/ClassicElegantFasionSubpage3.jpg";
import ClassicElegantFashionSubpageModel4 from "../../../../../img/ClassicElegantFasionSubpage4.jpg";
import ClassicElegantFashionSubpageModel5 from "../../../../../img/ClassicElegantFasionSubpage5.jpg";
import ClassicElegantFashionSubpageModel6 from "../../../../../img/ClassicElegantFasionSubpage6.jpg";
import RetroFashionSubpageModel1 from "../../../../../img/RetroFasionSubpage4.jpg";
import RetroFashionSubpageModel2 from "../../../../../img/RetroFasionSubpage1.jpg";
import RetroFashionSubpageModel3 from "../../../../../img/RetroFasionSubpage2.jpg";
import RetroFashionSubpageModel4 from "../../../../../img/RetroFasionSubpage3.jpg";
import RetroFashionSubpageModel5 from "../../../../../img/RetroFasionSubpage5.jpg";
import RetroFashionSubpageModel6 from "../../../../../img/RetroFasionSubpage6.jpg";
import SportFasionSubpageModel1 from "../../../../../img/SportFasionSubpage1.jpg";
import SportFasionSubpageModel2 from "../../../../../img/SportFasionSubpage2.jpg";
import SportFasionSubpageModel3 from "../../../../../img/SportFasionSubpage3.jpg";
import SportFasionSubpageModel4 from "../../../../../img/SportFasionSubpage4.jpg";
import SportFasionSubpageModel5 from "../../../../../img/SportFasionSubpage5.jpg";
import SportFasionSubpageModel6 from "../../../../../img/SportFasionSubpage6.jpg";
import StreetStyleFashionSubpageModel1 from "../../../../../img/StreetStyleFasionSubpage1.jpg";
import StreetStyleFashionSubpageModel2 from "../../../../../img/StreetStyleFasionSubpage2.jpg";
import StreetStyleFashionSubpageModel3 from "../../../../../img/StreetStyleFasionSubpage3.jpg";
import StreetStyleFashionSubpageModel4 from "../../../../../img/StreetStyleFasionSubpage4.jpg";
import StreetStyleFashionSubpageModel5 from "../../../../../img/StreetStyleFasionSubpage5.jpg";
import StreetStyleFashionSubpageModel6 from "../../../../../img/StreetStyleFasionSubpage6.jpg";
import SummerFashionSubpageModel1 from "../../../../../img/SummerFashionSubpage1.jpg";
import SummerFashionSubpageModel2 from "../../../../../img/SummerFashionSubpage2.jpg";
import SummerFashionSubpageModel3 from "../../../../../img/SummerFashionSubpage3.jpg";
import SummerFashionSubpageModel4 from "../../../../../img/SummerFashionSubpage4.jpg";
import SummerFashionSubpageModel5 from "../../../../../img/SummerFashionSubpage5.jpg";
import SummerFashionSubpageModel6 from "../../../../../img/SummerFashionSubpage6.jpg";
import Clothes1 from "../../../../../img/clothe1.jpg";
import Clothes2 from "../../../../../img/clothe2.jpg";
export const PRODUCTS = [
  {
    id: 1,
    img: Model2JPG,
    ProductName: "Blue dress",
    price: 210.0,
    addtocart: "model1",
    clicked: 0,
  },
  {
    id: 2,
    img: Model3JPG,
    ProductName: "Red Jersey",
    price: 259.0,
    addtocart: "model2",
    clicked: 0,
  },
  {
    id: 3,
    img: Model4JPG,
    ProductName: "Democrazy Shirt",
    price: 159.0,
    addtocart: `model3`,
    clicked: 0,
  },
];

export const PRODUCTS1 = [
  {
    id: 4,
    img: ArtOfBeatFashionSubpageModel1,
    ProductName: "Damaged jacket",
    price: 159.0,
    addtocart: "clotheArtOfBeatFashion1",
    clicked: 0,
  },
  {
    id: 5,
    img: ArtOfBeatFashionSubpageModel2,
    ProductName: "Fancy oversize jacket",
    price: 599.0,
    addtocart: "clotheArtOfBeatFashion2",
    clicked: 0,
  },
  {
    id: 6,
    img: ArtOfBeatFashionSubpageModel3,
    ProductName: "leopard T-shirt",
    price: 199.0,
    addtocart: `clotheArtOfBeatFashion3`,
    clicked: 0,
  },
];
export const PRODUCTS2 = [
  {
    id: 7,
    img: ArtOfBeatFashionSubpageModel4,
    ProductName: "Red glasses",
    price: 99.0,
    addtocart: "clotheArtOfBeatFashion4",
    clicked: 0,
  },
  {
    id: 8,
    img: ArtOfBeatFashionSubpageModel5,
    ProductName: "Modern style Jacket",
    price: 599.0,
    addtocart: "clotheArtOfBeatFashion5",
    clicked: 0,
  },
  {
    id: 9,
    img: ArtOfBeatFashionSubpageModel6,
    ProductName: "Fancy Jacket",
    price: 199.0,
    addtocart: `clotheArtOfBeatFashion6`,
    clicked: 0,
  },
];
export const PRODUCTS3 = [
  {
    id: 10,
    img: ClassicElegantFashionSubpageModel1,
    ProductName: "Elegant dress",
    price: 599.0,
    addtocart: "clotheClassicElegantFasionSubpage1",
    clicked: 0,
  },
  {
    id: 11,
    img: ClassicElegantFashionSubpageModel2,
    ProductName: "Black suit",
    price: 1599.0,
    addtocart: "clotheClassicElegantFasionSubpage2",
    clicked: 0,
  },
  {
    id: 12,
    img: ClassicElegantFashionSubpageModel3,
    ProductName: "gray suit",
    price: 1199.0,
    addtocart: `clotheClassicElegantFasionSubpage3`,
    clicked: 0,
  },
];
export const PRODUCTS4 = [
  {
    id: 13,
    img: ClassicElegantFashionSubpageModel4,
    ProductName: "Grey elegant suit",
    price: 599.0,
    addtocart: "clotheClassicElegantFasionSubpage4",
    clicked: 0,
  },
  {
    id: 14,
    img: ClassicElegantFashionSubpageModel5,
    ProductName: "Black suit",
    price: 1599.0,
    addtocart: "clotheClassicElegantFasionSubpage5",
    clicked: 0,
  },
  {
    id: 15,
    img: ClassicElegantFashionSubpageModel6,
    ProductName: "Gray modern suit",
    price: 1199.0,
    addtocart: `clotheClassicElegantFasionSubpage6`,
    clicked: 0,
  },
];
export const PRODUCTS5 = [
  {
    id: 16,
    img: RetroFashionSubpageModel1,
    ProductName: "Vintage oversize jacket",
    price: 235.0,
    addtocart: "clotheRetroFashionSubpage1",
    clicked: 0,
  },
  {
    id: 17,
    img: RetroFashionSubpageModel2,
    ProductName: " Colorful bomber jacket",
    price: 59.0,
    addtocart: "clotheRetroFashionSubpage2",
    clicked: 0,
  },
  {
    id: 18,
    img: RetroFashionSubpageModel3,
    ProductName: " Floral t-shirt",
    price: 199.0,
    addtocart: `clotheRetroFashionSubpage3`,
    clicked: 0,
  },
];
export const PRODUCTS6 = [
  {
    id: 19,
    img: RetroFashionSubpageModel4,
    ProductName: "Black long-sleeved T-shirt",
    price: 299.0,
    addtocart: "clotheRetroFashionSubpage4",
    clicked: 0,
  },
  {
    id: 20,
    img: RetroFashionSubpageModel5,
    ProductName: "gray sweatshirt",
    price: 129.0,
    addtocart: "clotheRetroFashionSubpage5",
    clicked: 0,
  },
  {
    id: 21,
    img: RetroFashionSubpageModel6,
    ProductName: "Gold necklace",
    price: 599.0,
    addtocart: `clotheRetroFashionSubpage6`,
    clicked: 0,
  },
];
export const PRODUCTS7 = [
  {
    id: 22,
    img: SportFasionSubpageModel1,
    ProductName: "Purple adidas shorts",
    price: 99.0,
    addtocart: "clotheSportyCasualSubpage1",
    clicked: 0,
  },
  {
    id: 23,
    img: SportFasionSubpageModel2,
    ProductName: " Colorful bomber jacket",
    price: 59.0,
    addtocart: "clotheSportyCasualSubpage2",
    clicked: 0,
  },
  {
    id: 24,
    img: SportFasionSubpageModel3,
    ProductName: " Floral t-shirt",
    price: 199.0,
    addtocart: `clotheSportyCasualSubpage3`,
    clicked: 0,
  },
];
export const PRODUCTS8 = [
  {
    id: 25,
    img: SportFasionSubpageModel4,
    ProductName: "Black long-sleeved T-shirt",
    price: 299.0,
    addtocart: "clotheRetroFashionSubpage4",
    clicked: 0,
  },
  {
    id: 26,
    img: SportFasionSubpageModel5,
    ProductName: "gray sweatshirt",
    price: 229.0,
    addtocart: "clotheRetroFashionSubpage5",
    clicked: 0,
  },
  {
    id: 27,
    img: SportFasionSubpageModel6,
    ProductName: "Gold necklace",
    price: 599.0,
    addtocart: `clotheRetroFashionSubpage6`,
    clicked: 0,
  },
];
export const PRODUCTS9 = [
  {
    id: 28,
    img: StreetStyleFashionSubpageModel1,
    ProductName: "Checkered shirt",
    price: 299.0,
    addtocart: "clotheRetroFashionSubpage1",
    clicked: 0,
  },
  {
    id: 29,
    img: StreetStyleFashionSubpageModel2,
    ProductName: "White modern jacket",
    price: 500.0,
    addtocart: "clotheRetroFashionSubpage2",
    clicked: 0,
  },
  {
    id: 30,
    img: StreetStyleFashionSubpageModel3,
    ProductName: "Long-sleeved shirt",
    price: 220.0,
    addtocart: `clotheRetroFashionSubpage3`,
    clicked: 0,
  },
];
export const PRODUCTS10 = [
  {
    id: 31,
    img: StreetStyleFashionSubpageModel4,
    ProductName: "Red oversize T-shirt",
    price: 99.0,
    addtocart: "clotheRetroFashionSubpage4",
    clicked: 0,
  },
  {
    id: 32,
    img: StreetStyleFashionSubpageModel5,
    ProductName: "Nike Shoes",
    price: 500.0,
    addtocart: "clotheRetroFashionSubpage5",
    clicked: 0,
  },
  {
    id: 33,
    img: StreetStyleFashionSubpageModel6,
    ProductName: "Modern style jeans",
    price: 179.0,
    addtocart: `clotheRetroFashionSubpage6`,
    clicked: 0,
  },
];
export const PRODUCTS11 = [
  {
    id: 34,
    img: SummerFashionSubpageModel1,
    ProductName: "White dress",
    price: `$${59.0}`,
    addtocart: "clotheSummerFasion1",
    clicked: 0,
  },
  {
    id: 35,
    img: SummerFashionSubpageModel2,
    ProductName: "White top",
    price: `$${29.0}`,
    addtocart: "clotheSummerFasion2",
    clicked: 0,
  },
  {
    id: 36,
    img: SummerFashionSubpageModel3,
    ProductName: "Red dress",
    price: 199.0,
    addtocart: `clotheSummerFasion3`,
    clicked: 0,
  },
];
export const PRODUCTS12 = [
  {
    id: 37,
    img: SummerFashionSubpageModel4,
    ProductName: "Oversize Jeans",
    price: 109.0,
    addtocart: "clotheSummerFasion4",
    clicked: 0,
  },
  {
    id: 38,
    img: SummerFashionSubpageModel5,
    ProductName: "Colorful glasses",
    price: 59.0,
    addtocart: "clotheSummerFasion5",
    clicked: 0,
  },
  {
    id: 39,
    img: SummerFashionSubpageModel6,
    ProductName: "Black sweatshirt",
    price: 79.0,
    addtocart: `clotheSummerFasion6`,
    clicked: 0,
  },
  {
    id: 40,
    img: Clothes1,
    ProductName: "Nike X Offwhite",
    price: 779.0,
    addtocart: `clothe1`,
    clicked: 0,
  },
  {
    id: 41,
    img: Clothes2,
    ProductName: "Nike colorful",
    price: 479.0,
    addtocart: `clothe2`,
    clicked: 0,
  },
];
export const ALL_PRODUCTS = [
  ...PRODUCTS,
  ...PRODUCTS1,
  ...PRODUCTS2,
  ...PRODUCTS3,
  ...PRODUCTS4,
  ...PRODUCTS5,
  ...PRODUCTS6,
  ...PRODUCTS7,
  ...PRODUCTS8,
  ...PRODUCTS9,
  ...PRODUCTS10,
  ...PRODUCTS11,
  ...PRODUCTS12,
];
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS1);

  const updateProductClicked = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId
          ? { ...product, clicked: product.clicked + 1 }
          : product
      );
    });
  };

  return (
    <ProductsContext.Provider value={{ products, updateProductClicked }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => React.useContext(ProductsContext);

const ProductsContext = React.createContext();
