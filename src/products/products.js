import React, { Component } from "react";
import { PRODUCTS_QUERY } from "../query";
import ListItem from "../Components/listItem/listItem";
import SelectCurrency from "../Components/currencySelector/currencySelector";

export default class AllProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category:  '',
      pUNo: 0
    };
  }
  
  componentDidMount() {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ productUrl: data.data.categories[this.state.pUNo].products}))
      .then(() => {
        // console.log(data.data.categories[0].products[0].category);
        //this.setState({ category: this.state.productUrl[0].category })
        this.setState({ products: this.state.productUrl });
        console.log(this.state.category)
        console.log(this.state.products)
      })
      .catch((error) => console.log(error.message));
  }
  render() {
    let cat = '';
    if(this.state.category === 'clothes') {
      return cat = 'Clothes'
    } else if(this.state.category === 'tech') {
      return cat= 'Tech-Products'
    } else {
      cat = 'All-Products'
    }
        
    return (
      <div>
        <div className="product-list">
          <h2 className="category-name">{cat}</h2>
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
