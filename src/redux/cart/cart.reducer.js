import {
  TOGGLE_CART_DROPDOWN_SUCCESS,
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  CLEAR_ITEM_FROM_CART_SUCCESS,
  CLEAR_CART,
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
    case TOGGLE_CART_DROPDOWN_SUCCESS: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }
    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }
    case CLEAR_ITEM_FROM_CART_SUCCESS: {
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    }
    case REMOVE_ITEM_FROM_CART_SUCCESS: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
