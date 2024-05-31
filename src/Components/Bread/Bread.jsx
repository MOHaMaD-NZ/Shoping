import React from "react";
import "./bread.css";
import { IoIosArrowBack } from "react-icons/io";

const Bread = (props) => {
  const { product } = props;
  return (
    <div className="bread">
      صفحه اصلی <IoIosArrowBack /> خرید <IoIosArrowBack /> {product.category}{" "}
      <IoIosArrowBack /> {product.name} <IoIosArrowBack />
    </div>
  );
};

export default Bread;
