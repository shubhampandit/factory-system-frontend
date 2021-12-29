import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productName">{product.productName}</div>
      <div className="productQuantity">{product.quantity}</div>
      <div className="productPrice">{product.price}</div>
      <button className="productDeleteButton">X</button>
    </div>
  );
}

export default ProductCard;
