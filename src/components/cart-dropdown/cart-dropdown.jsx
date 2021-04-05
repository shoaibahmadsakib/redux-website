import React from "react";
import "../cart-dropdown/cart-dropdown.scss";
import CustopButton from "../Button/Custombutton";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from '../../redux/cart/cart-selector';
import {withRouter } from 'react-router-dom'

const CartDropdown = ({ cartItems,history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {
      cartItems.length?
      (cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))):
      <span>this is empth</span>
      }
    </div>
    <CustopButton onClick={()=>history.push('/checkout')}>Go to checkout</CustopButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
