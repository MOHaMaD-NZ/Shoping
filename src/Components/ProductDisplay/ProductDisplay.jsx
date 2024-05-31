import React, { useState } from "react";
import "./productdisplay.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <section className="productdisplay cartt">
      <div className="left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <div className="prices">
          <div className="price-old">{product.old_price}</div>
          <div className="price-new">{product.new_price}</div>
        </div>
        <div className="description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که
        </div>
        <div className="right-size">
          <h1>سایز مد نظر تو انتخاب کن</h1>

          <div className="blue">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          اضافه کردن به سبد
        </button>
      </div>
    </section>
  );
};
// onClick={addToCart(product.id)}
export default ProductDisplay;
