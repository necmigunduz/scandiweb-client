import './App.css';
import React, { useEffect, useState } from 'react'

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

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: PRODUCTS_QUERY })
    })
      .then(response => response.json())
      .then(data => setProducts(data.data.categories[0].products))
      .catch(error => console.log(error.message))
  }, [])
  
  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products}
      </ul>
    </div>
  );
}

export default App;
