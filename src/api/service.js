import {
  get,
} from "./index";

// dictionary containing all dummy JSONs corresponding to URI
const dummyData = {
  products: '/responses/products.json',
};

const api = {
  dummyApiCall: ({ type }) => {
    const result = get(dummyData[type] ? dummyData[type] : "/responses/error.json");
    return result;
  },
  fetchProducts: () => api.dummyApiCall({type: 'products'})
};


export default api;