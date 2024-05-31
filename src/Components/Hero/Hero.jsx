import React from "react";
import { PiHandWaving } from "react-icons/pi";
import p10 from "../../assets/images/p10.jpg";
import "./hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> مجموعه های جدیدتر</h2>

        <div className="">
          <div className="hand-icon">
            <p>کارهای</p>
            <PiHandWaving className="icon" />
          </div>
          <p>جدیدتر</p>
          <p>برای همه</p>
        </div>

        <div className="hero-latest-btn">
          <div className="">مجموعه های جدید</div>
          <FaLongArrowAltRight className="icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={p10} alt="" />
      </div>
    </div>
  );
};

export default Hero;
