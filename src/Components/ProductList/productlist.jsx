import React, { useState, useEffect } from "react";
import Product from "../Product/product";
import "./productlist.css";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const formatProductData = (info) => {
    return info.map((item, index) => {
      return (
        <Product
          key={index}
          imageSrc={item.image}
          productDescription={item.category}
          productTitle={item.title}
          productPrice={item.price}
        />
      );
    });
  };

  return (
    <div className="productList-container">
      {productData && formatProductData(productData)}
    </div>
  );
};

export default ProductList;
