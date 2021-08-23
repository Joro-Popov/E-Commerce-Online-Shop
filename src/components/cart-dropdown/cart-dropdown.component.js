import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  ButtonContainer,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

function CartDropdown({ cartItems, history, toggleCartDropdown }) {
  const goToCheckout = () => {
    history.push("/checkout");
    toggleCartDropdown();
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItemsContainer>
      ) : (
        <EmptyMessageContainer className="empty-message">
          Your cart is empty!
        </EmptyMessageContainer>
      )}
      <ButtonContainer
        type="submit"
        fullWidth
        variant="contained"
        onClick={goToCheckout}
      >
        GO TO CHECKOUT
      </ButtonContainer>
    </CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = {
  toggleCartDropdown
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
