import React from "react";
import "../cart-dropdown/cart-dropdown.scss";
import CustopButton from "../Button/Custombutton";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustopButton>Go to checkout</CustopButton>
  </div>
);
export default CartDropdown;
