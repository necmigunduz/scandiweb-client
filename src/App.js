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
  console.log(products)
  return (
    <div className="App">
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className='product-li'>
              <div>{product.name}</div>
              <img src={product.gallery[0]} alt='Product Photo' width={"200px"}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
