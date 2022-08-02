import React from "react";
import "./product.css";

const Product = ({
  imageSrc,
  productTitle,
  productDescription,
  productPrice,
}) => {
  return (
    <div className="product-container">
      <img src={imageSrc} height="300" width="300" />
      <div>
        <p className="product-title" title={productTitle}>
          {productTitle}
        </p>
        <p>{productDescription}</p>
        <p className="product-price">Rs: {productPrice}</p>
      </div>
    </div>
  );
};

export default Product;
