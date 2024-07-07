import React from "react";
import "../components/Header.css";
import CartImg from "../assets/cart.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header-logo">
        Delivery Order
      </a>
      <div className="header-cart">
        장바구니
        <div className="header-cart-img">
          <img src={CartImg} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
