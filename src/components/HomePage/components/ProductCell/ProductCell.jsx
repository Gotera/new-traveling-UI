import React from "react";
import { ProductCellWrapper, CellTop, CellBottom } from "./ProductCell.styled";

function ProductCell(props) {
  return (
    <ProductCellWrapper>
      <CellTop>{props.icon}</CellTop>
      <CellBottom>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </CellBottom>
    </ProductCellWrapper>
  );
}

export default ProductCell;
