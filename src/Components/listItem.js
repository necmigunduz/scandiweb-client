import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <li key={this.props.pId} className="product-li">
        <img src={this.props.pImg} alt="products" />
        <span>{this.props.pName}</span>
        <span>{this.props.pBrand}</span>
        <span>{this.props.pPrice}</span>
      </li>
    );
  }
}
