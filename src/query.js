const PRODUCTS_QUERY = `{
	categories {
    products {
      id
      name
      category
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

export { PRODUCTS_QUERY }