import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products/reducer';

export default combineReducers({
  products,
  routing: routerReducer
});
