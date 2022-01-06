import './App.css';
import React, { Component } from 'react'

const PRODUCTS_QUERY = `{
	categories {
    products {
      id
      name
      brand
      description
      inStock
      gallery
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
    }
  }
}`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: PRODUCTS_QUERY })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data.data.categories[0].products })
      })
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h2>Products</h2>
        <ul className='product-ul'>
          {this.state.products.map((product) => {
            return (
              <li key={product.id} className='product-li'>
                <div>{product.name}</div>
                <img src={product.gallery[0]} alt='products' width={"200px"}/>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

export default App;
