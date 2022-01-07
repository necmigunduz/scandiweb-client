import React, { Component } from "react";
import { PRODUCTS_QUERY } from "../query";

class ProductList extends Component {
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
        this.setState({ products: data.data.categories[0].products });
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <div className="product-list">
        <h2 className="category-name">Products</h2>
        <ul className="product-ul">
          {this.state.products.map((product) => {
            return (
              <li key={product.id} className="product-li">
                <img src={product.gallery[0]} alt="products" />
                <span>{product.name}</span>
                <span>{product.brand}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
 export default ProductList
