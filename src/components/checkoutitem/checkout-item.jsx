import React from 'react'
import {connect } from 'react-redux'
import { clearItemFromCart,addItem,removeItem } from '../../redux/cart/cart.action'
import './checkout-item.scss'

const CheckourItem =({cartItem, clearItem ,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity} = cartItem;
    return(
     <div className="checkout-item">
         <div className="image-container">
             <img src={imageUrl} alt=""/>
         </div>
         <div className="name">{name}</div>

         <div className="quantity">
             <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
             {quantity}
             <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
         </div>
         <div className="price">{price}</div>
         <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
         
     </div>
    )
}
const mapDispatchToProps = dispatch=>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem:item => dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})
export default  connect(
    null,
    mapDispatchToProps
  )(CheckourItem);