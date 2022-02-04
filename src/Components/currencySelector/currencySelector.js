const SelectCurrency = (product, props) => {
  let currency = "";
  let sc = props.dataFromParent;
  if (sc === "USD") {
    currency = '$'+ product.prices[0].amount;
    return currency
  } else if (sc === "GBP") {
    currency = '£'+ product.prices[1].amount;
    return currency
  } else if (sc === "AUD") {
    currency = 'A$' + product.prices[2].amount;
    return currency
  } else if (sc === "RUB") {
    currency = '₽' + product.prices[3].amount;
    return currency
  } else if (sc === "JPY") {
    currency = '¥' + product.prices[4].amount;
    return currency
  } else { // Default Currency
    currency = '$'+ product.prices[0].amount;;
    return currency
  }
};

export default SelectCurrency;
