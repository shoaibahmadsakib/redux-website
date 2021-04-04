import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.style.scss";
import { auth } from "../../Firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../card-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            signOut
          </div>
        ) : (
          <Link className="option" to="/signin">
            sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
