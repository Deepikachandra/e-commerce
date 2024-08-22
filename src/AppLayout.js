import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body/Body";
import {
  JewelProductDataContext,
  CategoryDataContext,
} from "./Context/Context";
import { useState } from "react";
import { jewelProductData, categoryData } from "./Constants/Constants";

function AppLayout() {
  const [listOfJewelProductData, setListOfJewelProductData] = useState(jewelProductData);
  const [listOfCategoryData, setListOfCategoryData] = useState(categoryData);

  return (
    <div className="App">
      <JewelProductDataContext.Provider value={listOfJewelProductData}>
        <CategoryDataContext.Provider value={listOfCategoryData}>
          <Header />
          <Body />
        </CategoryDataContext.Provider>
      </JewelProductDataContext.Provider>
    </div>
  );
}

export default AppLayout;
