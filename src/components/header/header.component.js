import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartItem from '../../components/cart-icon';
import CartDropdown from '../../components/cart-dropdown';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

function Header({ currentUser, cartDropdownHidden, signOutStart }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        {currentUser && <CartItem />}
      </OptionsContainer>
      {!cartDropdownHidden && <CartDropdown />}
    </HeaderContainer>
  );
}

// createStrucutredSelector will pass top level state in each subsequent selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
