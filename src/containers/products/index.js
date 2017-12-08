// import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchProductList } from 'seek-redux/products/actions';

// const Products = props => (
//   <div>
//     <h1>Products</h1>
//     <button onClick={() => props.changePage()}>Go to checkout page via redux</button>
//     <button onClick={() => props.fetchProductList()}>Fetch Product List</button>
//   </div>
// );

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchProductList,
//   changePage: () => push('/checkout')
// }, dispatch);

// export default connect(
//   state => ({
//     products: state.products
//   }), 
//   mapDispatchToProps
// )(Products);


import React from 'react';
import ProductsContent from './ProductsContent';
import CompanyAvatar from './CompanyAvatar';

const Products = props => (
  <div className="wrapper">
    <CompanyAvatar {...props} />
    <ProductsContent {...props} />
  </div>
);

export default Products;