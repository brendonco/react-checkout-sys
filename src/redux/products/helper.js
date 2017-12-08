import accounting from 'accounting';

// Calculate number of discounted item
// numberOfPromoItem - Contain how many item to be discounted.
// priceFor - Contain the number of item discounted.
// quantity - Contain the number of current ad
// productPrice - Contain the product price
const calcPriceFor = (numberOfPromoItem, priceFor, quantity, productPrice) => {
  let calcPrice = (quantity / numberOfPromoItem);

  if (Number.isInteger(calcPrice)) {
    calcPrice = (calcPrice * priceFor) * productPrice;
  } else if (calcPrice > 1){
    calcPrice = ((calcPrice * priceFor) * productPrice) + productPrice;
  } else if (calcPrice < 1) {
    calcPrice = quantity * productPrice;
  }

  return calcPrice;
}

const calcItemOrMore = (quantity, minItem, discountPrice, origPrice) => {
  let calcPrice = 0;

  if (quantity > minItem) {
    calcPrice = quantity * discountPrice;
  } else {
    calcPrice = quantity * origPrice;
  }

  return calcPrice;
}

const updateSavedData = (savedData = [], {productId, qty, quantity, totalPrice}) => {
  if (qty === "") {
    return savedData.filter(data => data.productId !== productId);
  }

  const itemFound = savedData.find(item => item.productId === productId);

  if (savedData.length > 0 && itemFound) {
    return savedData.map(item => item).reduce((prev, curr) => {
      if (productId === curr.productId) {
        const {quantity: qty, totalPrice: total, ...rest} = curr;
        return prev.concat([{...rest, quantity, totalPrice}]);
      }
      
      return prev.concat(curr);
    }, []);
  }

  return savedData.concat({productId, quantity, totalPrice});
}

export const getGrandTotal = savedData => {
  return accounting.formatNumber(savedData.reduce((prev, curr) => prev + parseFloat(curr.totalPrice), 0), 2);
};

export const getUpdatedProductList = (products, productId, qty, companyId, savedData) => {
  if (qty === "0") return;

  const product = products.find(product => product.id === productId);
  const { specialPriceRules = [] } = product;
  const quantity = parseInt(qty === "" ? 1 : qty, 10);
  const companyDiscountRule = specialPriceRules.find(rule => rule.companyIds.find(id => id === companyId));

  let calcPrice = 0;
  const productPrice = parseFloat(product.price);

  if (typeof companyDiscountRule !== "undefined") {
    // update products
    switch(companyDiscountRule.code) {
      case "3for2":
        calcPrice = calcPriceFor(3, 2, quantity, productPrice);
        break;
      case "5for4":
        calcPrice = calcPriceFor(5, 4, quantity, productPrice);
        break;
      case "3orMore":
        calcPrice = calcItemOrMore(quantity, 2, parseFloat(companyDiscountRule.price), productPrice);
        break;
      case "4orMore":
        calcPrice = calcItemOrMore(quantity, 3, parseFloat(companyDiscountRule.price), productPrice);
        break;
      case "4forLess":
      case "7forLess":
        calcPrice = quantity * parseFloat(companyDiscountRule.price);
        break;
      default:
      break;
    }
  } else {
    // normal price calculation
    calcPrice = productPrice * quantity;
  }

  const restProduct = products.filter(product => product.id !== productId);
  const { displayPrice, ...restCurrentProduct } = product;
  const cloneProduct = Object.assign({}, restCurrentProduct, {displayPrice: accounting.formatNumber(calcPrice, 2)})
  const updatedProducts = [].concat(restProduct).concat([cloneProduct]);

  updatedProducts.sort((a, b) => a.sortOrder - b.sortOrder);

  return {
    data: updatedProducts,
    checkout: updateSavedData(savedData, {productId, qty, quantity, totalPrice: calcPrice.toFixed(2)}),
  };
}
