import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItem from "../../Components/listItem/listItem";
import SelectCurrency from "../../Components/currencySelector/currencySelector";
import Category from "../../Components/categorySelector/categorySelector";
import FetchApi from "../api/fetchApi";
import Type from "../api/type";

export default class AllProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    let prds = await FetchApi(0)
    this.setState({
      products: prds
    })
  }

  async componentDidUpdate() {
    let type = Type(this.props);
    let prdcts = await FetchApi(type)
    console.log(typeof(prdcts))
    this.setState({
      products: prdcts
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
                  <Link to={product.id} key={product.id}>
                    <ListItem
                      pId={product.id}
                      pImg={product.gallery[0]}
                      pName={product.name}
                      pBrand={product.brand}
                      pPrice={currency}
                    />
                  </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
