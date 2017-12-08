import {
  GET_PROD_LIST,
  GET_PROD_LIST_ERROR,
  UPDATE_PROD_DATA
} from './actionTypes';
import api from 'api';
import { getUpdatedProductList } from './helper';

export const updateProducts = ({products, productId, qty, companyId, savedData}) => {
  return {
    type: UPDATE_PROD_DATA,
    payload: {
      ...getUpdatedProductList(products, productId, qty, companyId, savedData)
    }
  }
}

export const fetchProductList = () => async dispatch => {
  const getPromise = async () => {
    try {
      const { body } = await api.fetchProducts();
      let productList = body;

      if (Array.isArray(body)) {
        productList = body.map(prod => {
          return {
            ...prod,
            displayPrice: prod.price
          }
        });
      }

      return {
        data: productList,
        isFetch: true,
      };
    } catch (error) {
      dispatch({
        type: GET_PROD_LIST_ERROR,
        payload: error
      });
    }
  };

  return dispatch({
    type: GET_PROD_LIST,
    payload: getPromise()
  });
};