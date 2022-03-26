import { PRODUCTS_QUERY } from "../../query";

const FetchApi = async(type) => {
  let products = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: PRODUCTS_QUERY }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
  let prdcts = products.data.categories[type].products;
  return prdcts;
};

export default FetchApi;
