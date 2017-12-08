import { createReducer, standardReducer } from 'gdp-redux/utils';

import * as types from './actionTypes';

const initialState = {
  isFetch: false,
  data: [],
  checkout: [],
  error: {}
};

const reducer = createReducer(initialState, {
  [types.GET_PROD_LIST_START]: standardReducer,
  [types.GET_PROD_LIST_SUCCESS]: standardReducer,
  [types.GET_PROD_LIST_ERROR]: standardReducer,
  [types.UPDATE_PROD_DATA]: standardReducer,
  [types.PROD_ADD_START]: standardReducer,
  [types.PROD_ADD_SUCCESS]: standardReducer,
  [types.PROD_ADD_ERROR]: standardReducer
});

export default reducer;
