import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <li key={this.props.pId} className="product-li">
        <img src={this.props.pImg} alt="products" />
        <div className="d-flex-column mt-10 p-10">
          <span className="p-10">{this.props.pBrand}</span> 
          <span>{this.props.pName}</span>
          <span>{this.props.pPrice}</span>
        </div>
      </li>
    );
  }
}
