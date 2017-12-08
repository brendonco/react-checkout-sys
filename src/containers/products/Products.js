import React from 'react';
import {
  ProductTableHeader,
  ProductTableBody
} from './widgets';

const Products = ({ products = [], productState, handleQtyChange, savedData, grandTotal}) => {
  return (
    <div>
      <ProductTableHeader />
      <ProductTableBody
        products={products}
        handleQtyChange={handleQtyChange}
      />
      <div className="row footer">
        <div className="col"></div>
        <div className="col prod__label">Grand Total:</div>
        <div className="col prod__total">{`${grandTotal}`}</div>
      </div>
    </div>
  );
}

export default Products;