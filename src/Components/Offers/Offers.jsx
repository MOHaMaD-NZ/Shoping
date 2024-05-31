import React from "react";
import "./offers.css";
import off1 from "../../assets/images/off1.jpg";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-left">
        <h1>تخفیف</h1>
        <h1>ویژه</h1>
        <p>فقط برای امروز</p>
        <button>کلیک کن</button>
      </div>
      <div className="offers-right">
        <img src={off1} alt="" />
      </div>
    </section>
  );
};

export default Offers;
