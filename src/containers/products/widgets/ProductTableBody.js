import React from 'react';
import { Textfield } from 'gdp-components/textfield';

const ProductTableBody = ({ products = [], handleQtyChange }) => {
  const prods = products.map((product, idx) => 
    <div key={idx} className="row">
      <div className="col col__item col__item--description">{product.name}</div>
      <div className="col col__item col__item--quantity">
        <Textfield
          type="number"
          name={product.id}
          min="1"
          pattern="[1-9]+"
          onChange={handleQtyChange}
          onBlur={handleQtyChange}
        />
      </div>
      <div className="col col__item">${product.displayPrice}</div>
    </div>
  );

  return <form>{prods}</form>;
};

export default ProductTableBody;
