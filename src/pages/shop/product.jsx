import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, title, price, images } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={images[0]} alt="" style={{maxHeight:"100%", objectFit:"scale-down"}}/>
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Köp {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
