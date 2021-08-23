import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-con.styles";

function CartIcon({ toggleCartDropdown, cartItemsCount }) {
  return (
    <CartIconContainer>
      <ShoppingIconContainer onClick={() => toggleCartDropdown()} />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = {
  toggleCartDropdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);