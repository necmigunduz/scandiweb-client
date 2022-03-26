import { PRODUCTS_QUERY } from "../../query";

const FetchApi = async() => {
  let products = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: PRODUCTS_QUERY }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
  return products.data.categories;
};

export default FetchApi;
