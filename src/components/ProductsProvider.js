import React, { createContext, useContext, useState } from "react";
import { ALL_PRODUCTS } from "../components/FashionCategory/FashionCategorySubpages/Product/ArrayOfProducts/AllProducts";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(ALL_PRODUCTS);

  const updateProductClicked = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId
          ? { ...product, clicked: product.clicked + 1 }
          : product
      );
    });
  };
  const deleteProduct = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId && product.clicked > 0
          ? { ...product, clicked: product.clicked - 1 }
          : product
      );
    });
  };
  const getProductsByIdMain = () => {
    return products.filter((product) => product.id >= 1 && product.id <= 3);
  };
  const getProductsByIdArtOfBeatRow1 = () => {
    return products.filter((product) => product.id >= 4 && product.id <= 6);
  };
  const getProductsByIdArtOfBeatRow2 = () => {
    return products.filter((product) => product.id >= 7 && product.id <= 9);
  };
  const getProductsByIdClassicElegant1 = () => {
    return products.filter((product) => product.id >= 10 && product.id <= 12);
  };
  const getProductsByIdClassicElegant2 = () => {
    return products.filter((product) => product.id >= 13 && product.id <= 15);
  };
  const getProductsByIdRetro1 = () => {
    return products.filter((product) => product.id >= 16 && product.id <= 18);
  };
  const getProductsByIdRetro2 = () => {
    return products.filter((product) => product.id >= 19 && product.id <= 21);
  };
  const getProductsByIdSportyCasual1 = () => {
    return products.filter((product) => product.id >= 22 && product.id <= 24);
  };
  const getProductsByIdSportyCasual2 = () => {
    return products.filter((product) => product.id >= 25 && product.id <= 27);
  };
  const getProductsByIdStreetStyle1 = () => {
    return products.filter((product) => product.id >= 28 && product.id <= 30);
  };
  const getProductsByIdStreetStyle2 = () => {
    return products.filter((product) => product.id >= 31 && product.id <= 33);
  };
  const getProductsByIdSummerFashion1 = () => {
    return products.filter((product) => product.id >= 34 && product.id <= 36);
  };
  const getProductsByIdSummerFashion2 = () => {
    return products.filter((product) => product.id >= 37 && product.id <= 39);
  };
  const getProductsByIdLatestArrivals = () => {
    return products.filter((product) => product.id >= 40 && product.id <= 41);
  };

  const getCartItems = () => {
    return products.filter((product) => product.clicked > 0);
  };

  const value = {
    products,
    getProductsByIdMain,
    updateProductClicked,
    getProductsByIdClassicElegant1,
    getProductsByIdClassicElegant2,
    getProductsByIdArtOfBeatRow1,
    getProductsByIdArtOfBeatRow2,
    getProductsByIdRetro1,
    getProductsByIdRetro2,
    getProductsByIdSportyCasual1,
    getProductsByIdSportyCasual2,
    getProductsByIdStreetStyle1,
    getProductsByIdStreetStyle2,
    getProductsByIdSummerFashion1,
    getProductsByIdSummerFashion2,
    getProductsByIdLatestArrivals,
    getCartItems,
    deleteProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
