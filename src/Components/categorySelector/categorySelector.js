const Category = (props) => {
    let category = "";
    let sCat = props.categoryFromParent;
    if (sCat === "all") {
      category = "All Products"
      return category
    } else if (sCat === "clothes") {
        category = "Clothes"
        return category
    } else if (sCat === "techs") {
        category = "Electronics"
        return category
    } 
  };
  
  export default Category;
  