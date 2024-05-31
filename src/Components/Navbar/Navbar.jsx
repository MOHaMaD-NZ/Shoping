import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <section className="navbar">
      <div className="nav-logo">
        <FaShopify className="icon" />

        <span>SHOPPER</span>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            خرید
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="mens">
            مردانه
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="womens">
            زنانه{" "}
          </Link>
          {menu === "womens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="kids">
            کودکانه{" "}
          </Link>
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="icon" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </section>
  );
};

export default Navbar;
