import React from "react";
import "./checkout.style.scss";
import {connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector'
import CheckourItem from "../../components/checkoutitem/checkout-item";

const Checkout = ({ cartItems, total}) => {
  return(
      <div className="checkout-page">
          <div className="checkout-header">
              <div className="header-block">
                  <span>Product</span>
              </div>
              <div className="header-block">
                  <span>Description</span>
              </div>
              <div className="header-block">
                  <span>Quantity</span>
              </div>
              <div className="header-block">
                  <span>price</span>
              </div>
              <div className="header-block">
                  <span>Remove</span>
              </div>
              
          </div>
          {
              cartItems.map(cartItem=> (
                  <CheckourItem key={cartItem} cartItem={cartItem}/>
              ))
          }
          <div className="total">TOTAL: ${total}</div>
      </div>
  )
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);
