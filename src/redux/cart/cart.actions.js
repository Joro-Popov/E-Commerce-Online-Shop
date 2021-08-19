import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from "./cart.types";
import store from '../store';

const toggleCartDropdownSuccess = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

const addItemToCartSuccess = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const toggleCartDropdown = () => async (dispatch) => {
  try {
    dispatch(toggleCartDropdownSuccess());
  } catch (error) {
    console.error(error);
  }
};

export const addItemToCart = (item) => async (dispatch) => {
  try {
    dispatch(addItemToCartSuccess(item));
  } catch (error) {
    console.error(error);
  }
};
