import Category from "../categorySelector/categorySelector";

const Type = (props) => {
    let type = 0;
    if(Category(props)==='All Products'){
      return type = 0
    } else if(Category(props)==='Clothes'){
      return type = 1
    } else if(Category(props)==='Electronics'){
      return type = 2
    }
}

export default Type;