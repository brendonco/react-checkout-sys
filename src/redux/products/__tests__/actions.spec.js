import * as actions from 'gdp-redux/products/actions';
import * as types from 'gdp-redux/products/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('create GET_PROD_LIST when fetch products has been done', () => {
    const store = mockStore({ data: [] });

    const expectedActions = [types.GET_PROD_LIST];

    return store.dispatch(actions.fetchProductList()).then(() => {
      expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    });
  });
});