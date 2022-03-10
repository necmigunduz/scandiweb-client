import React, { Component } from "react";
import { PRODUCTS_QUERY } from "../../query";
import ListItem from "../../Components/listItem/listItem";
import SelectCurrency from "../../Components/currencySelector/currencySelector";
import Category from "../../Components/categorySelector/categorySelector";

export default class AllProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.categories[0].products);
        this.setState({ products: data.data.categories[0].products });
      })
      .catch((error) => console.log(error.message));
  }

  render() {      
    return (
      <div>
        <div className="product-list">
          <h2 className="category-name">{Category(this.props) ? Category(this.props) : "All Products"}</h2>
          <ul className="product-ul">
            {this.state.products.map((product) => {
              
              let currency = SelectCurrency(product, this.props);
              
              return (
                <ListItem
                  key={product.id}
                  pImg={product.gallery[0]}
                  pName={product.name}
                  pBrand={product.brand}
                  pPrice={currency}
                  pId={product.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
