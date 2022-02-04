import React, { Component } from "react";
import { PRODUCTS_QUERY } from "../query";
import ListItem from "./listItem/listItem";
import SelectCurrency from "./currencySelector/currencySelector";

export default class AllProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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
        <span>
          Select clothes or tech-products by clicking on the links on the
          top-left of the page to see the classified products!
        </span>
        <div className="product-list">
          <h2 className="category-name">Products</h2>
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
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
