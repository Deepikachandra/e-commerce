
const CategoryCard = ({categoryData}) => {
    //console.log("jewelData",jewelData);
    return(
      <div className="category-card">
        <img className="category-img" alt="categoryImg" src={categoryData.categoryImg} />
        <div>{categoryData.categoryName}</div>
      </div>
    )
}

export default CategoryCard;