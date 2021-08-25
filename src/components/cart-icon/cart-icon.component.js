import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdownStart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-con.styles";

function CartIcon({ toggleCartDropdownStart, cartItemsCount }) {
  return (
    <CartIconContainer>
      <ShoppingIconContainer onClick={() => toggleCartDropdownStart()} />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownStart: () => dispatch(toggleCartDropdownStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
