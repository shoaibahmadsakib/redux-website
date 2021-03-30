import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.style.scss'
const Header =()=>{
    return(
       <div className="header">
         <h1 className="logo">
             <Link to="/">Logo</Link>
         </h1>
         <div className="options">
             <Link className="option" to="/shop">Shop</Link>
             <Link className="option" to="/contact">contact</Link>
         </div>
       </div>
    )
}
export default Header