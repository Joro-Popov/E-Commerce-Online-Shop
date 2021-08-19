import React from 'react';
import Button from "@material-ui/core/Button";
import './cart-dropdown.styles.scss';

export default function CartDropdown() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="button"
          // style={{backgroundColor: 'black', color: 'white'}}
          onClick={() => {}}
        >
          GO TO CHECKOUT
        </Button>
      </div>
    );
}