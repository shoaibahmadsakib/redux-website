import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assect/shopping-bag.svg";
import { connect } from 'react-redux'
import {toggleCartHidden}  from '../../redux/cart/cart.action'
import "../card-icon/card-icon.style.scss";

const CartIcon = ({toggleCartHidden,itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count "> {itemCount} </span>
    </div>
  );
};
const mapDispatchToProps = dispatch=>({
  toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateTOProps = ({cart: {cartItems}}) =>({
  itemCount: cartItems.reduce((accumaltedQuantity,cartItem) =>accumaltedQuantity + cartItem.quantity,0)
})

export default connect(mapStateTOProps, mapDispatchToProps)(CartIcon);
