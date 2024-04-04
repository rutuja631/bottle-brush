import {React, useState} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [products, setProducts] = useState(PRODUCTS)
  const sortProducts = (criteria) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setProducts(sortedProducts);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>BottleBrush Galary</h1>
      </div>
      <h3>Product List</h3>
      <button onClick={() => sortProducts('price')}>Sort by Price</button><br></br>
      <button onClick={() => sortProducts('productName')}>Sort by Name</button>


      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
