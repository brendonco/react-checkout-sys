import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductList, updateProducts } from 'gdp-redux/products/actions';
import { getGrandTotal } from 'gdp-redux/products/helper';
import Products from './Products';

class ProductsContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleQtyChange = this.handleQtyChange.bind(this);
  }
  componentWillMount() {
    this.props.fetchProductList();
  }

  handleQtyChange(e) {
    const {
      products,
      match:{
        params: { companyId } = {}
      },
      savedData
    } = this.props;

    const prodUpdate = {
      products,
      productId: e.target.name,
      qty: e.target.value,
      companyId,
      savedData
    }

    this.props.updateProducts(prodUpdate);
  }

  render() {
    const {
      isFetch,
      products,
      savedData
    } = this.props;

    return isFetch ?
      <Products
        products={products}
        handleQtyChange={this.handleQtyChange}
        savedData={savedData}
        grandTotal={getGrandTotal(savedData)}
      /> : null // loader
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProductList,
  updateProducts,
}, dispatch);

ProductsContent.propTypes = {
  isFetch: PropTypes.bool,
  products: PropTypes.array,
  savedData: PropTypes.array,
}

export default connect(
  state => ({
    products: state.products.data,
    savedData: state.products.checkout,
    isFetch: state.products.isFetch,
  }),
  mapDispatchToProps
)(ProductsContent);