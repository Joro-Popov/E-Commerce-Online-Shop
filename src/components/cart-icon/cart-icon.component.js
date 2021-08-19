import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCartDropdown, cartItemsCount }) {
  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => toggleCartDropdown()}
      />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = {
  toggleCartDropdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);