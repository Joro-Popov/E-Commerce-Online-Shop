import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

function CartDropdown({ cartItems, history, toggleCartDropdown }) {
  const goToCheckout = () => {
    history.push("/checkout");
    toggleCartDropdown();
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty!</span>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="button"
        onClick={goToCheckout}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = {
  toggleCartDropdown
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
