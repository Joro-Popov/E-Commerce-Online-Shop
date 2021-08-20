import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";

const toggleCartDropdownSuccess = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

const addItemToCartSuccess = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

const clearItemFromCartSuccess = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

const removeItemFromCartSuccess = (item) => ({
  type: REMOVE_ITEM_FROM_CART,
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

export const clearItemFromCart = (item) => async (dispatch) => {
  try {
    dispatch(clearItemFromCartSuccess(item));
  } catch (error) {
    console.error(error);
  }
};

export const removeItemFromCart = (item) => async (dispatch) => {
  try {
    dispatch(removeItemFromCartSuccess(item));
  } catch (error) {
    console.error(error);
  }
};