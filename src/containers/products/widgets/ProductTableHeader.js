import React from 'react';

// Table header data should be from configuration api
const ProductTableHeader = () => [{
    header1: "Description",
    header2: "Quantity",
    header3: "Price"
  }].map((head, idx) =>
  <div key={idx} className="row header">
    <div className="col">{head.header1}</div>
    <div className="col">{head.header2}</div>
    <div className="col">{head.header3}</div>
  </div>
);

export default ProductTableHeader;