import Card from "./Card";
import CategoryCard from "./CategoryCard";
import "./Card.css";
import GridContainer from "./GridContainer";
import { useContext } from "react";
import {
  CategoryDataContext,
  JewelProductDataContext,
} from "../../Context/Context";

const MainContainer = () => {
  const listOfJewelProductData = useContext(JewelProductDataContext);
  const listOfCategoryData = useContext(CategoryDataContext);
  return (
    <div className="main-container">
      <h1 className="shopByCategory-heading">Shop by category</h1>
      <div className="category-card-container">
        {listOfCategoryData &&
          listOfCategoryData.map((item) => (
            <CategoryCard key={item.categoryNo} categoryData={item} />
          ))}
      </div>
      
      <h1 className="shopByCategory-heading">Shop all products</h1>
      <div className="card-container">
        {listOfJewelProductData &&
          listOfJewelProductData.map((item, i) => (
            <Card key={item.itemNo} jewelData={item} />
          ))}
      </div>

      <GridContainer />
    </div>
  );
};

export default MainContainer;
