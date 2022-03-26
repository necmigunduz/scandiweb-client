import React, { Component } from "react";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        brand: 'Nike',
        name: 'Sports Shoes'
      }
    };
  }

  render() {
    return (
      <div>
        {this.state.product.brand} <br/>
        {this.state.product.name}
      </div>
    );
  }
}
