import React from "react";
import { Product } from "./product";
import "./shop.css";
import { useState, useEffect } from "react";

export const Shop = () => {
  const [products, setproducts] = useState([])
  useEffect(
    ()=>
    {getproducts()}
    
    ,[])
    async function getproducts(){
      const res=await fetch("https://dummyjson.com/products");
      const data=await res.json()
      setproducts(data.products)
      console.log(data.products)
    }
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Eriks Webshop</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
