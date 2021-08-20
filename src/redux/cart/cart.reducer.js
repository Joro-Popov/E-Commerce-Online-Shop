import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }
    case CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
