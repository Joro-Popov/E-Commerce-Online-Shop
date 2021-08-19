import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { auth } from "../../utils/firebase";
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartItem from '../../components/cart-icon';
import CartDropdown from '../../components/cart-dropdown';

import "./header.styles.scss";

function Header({ currentUser, cartDropdownHidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        {currentUser && <CartItem />}
      </div>
      {!cartDropdownHidden && <CartDropdown />}
    </div>
  );
}

// createStrucutredSelector will pass top level state in each subsequent selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
