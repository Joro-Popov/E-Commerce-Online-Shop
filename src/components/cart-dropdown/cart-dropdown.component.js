import React from 'react';
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item';

function CartDropdown({cartItems}) {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="button"
          onClick={() => {}}
        >
          GO TO CHECKOUT
        </Button>
      </div>
    );
}

const mapStateToProps = ({cart}) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
