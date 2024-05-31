import React from "react";
import "./footer.css";
import { FaShopify } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-logo">
        <FaShopify className="icon" />
        <span>SHOPPER</span>
      </div>
      <ul className="footer-links">
        <li>شرکت</li>
        <li>محصولات</li>
        <li>ادارات</li>
        <li>درباره ما</li>
        <li>راه ارتباطی</li>
      </ul>
      <div className="footer-social-icon">
        <FaInstagram className="icon" />
        <PiTelegramLogoLight className="icon" />
        <CiTwitter className="icon" />
        <CiLinkedin className="icon" />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 -NZ</p>
      </div>
    </section>
  );
};

export default Footer;
