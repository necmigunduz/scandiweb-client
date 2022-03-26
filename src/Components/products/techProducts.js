import React, { Component } from "react";
import ListItem from "../listItem/listItem";
import SelectCurrency from "../currencySelector/currencySelector";
import Category from "../categorySelector/categorySelector";
import FetchApi from "../api/fetchApi";

export default class TechProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      type: this.props.ext
    };
  }

  async componentDidMount() {
    let id = 0;
    if(Category(this.props)==='Electronics'){
      id = 2
    }
    let prds = await FetchApi()
    this.setState({
      products: prds[id].products
    })
  }

  render() {
    return (
      <div>
        <div className="product-list">
          <h2 className="category-name">
            {Category(this.props) ? Category(this.props) : "All Products"}
          </h2>
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
