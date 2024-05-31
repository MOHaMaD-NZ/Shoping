import React, { useContext } from "react";
import "./cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <section className="cartitems">
      <hr />
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="format format-main">
                <img src={e.image} alt="" className="icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="quantity">{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>

                <CiCircleRemove
                  className="icon2"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default CartItems;
