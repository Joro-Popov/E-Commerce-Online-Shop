import {
  TOGGLE_CART_DROPDOWN_START,
  ADD_ITEM_TO_CART_START,
  REMOVE_ITEM_FROM_CART_START,
  CLEAR_ITEM_FROM_CART_START,
  CLEAR_CART,
  ADD_ITEM_SUCCESS,
  CLEAR_ITEM_FROM_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  TOGGLE_CART_DROPDOWN_SUCCESS,
} from "./cart.types";

export const toggleCartDropdownSuccess = () => ({
  type: TOGGLE_CART_DROPDOWN_SUCCESS,
});

export const toggleCartDropdownStart = () => ({
  type: TOGGLE_CART_DROPDOWN_START,
});

export const addItemToCartSuccess = (item) => ({
  type: ADD_ITEM_SUCCESS,
  payload: item,
});

export const addItemToCartStart = (item) => ({
  type: ADD_ITEM_TO_CART_START,
  payload: item,
});

export const clearItemFromCartSuccess = (item) => ({
  type: CLEAR_ITEM_FROM_CART_SUCCESS,
  payload: item,
});

export const clearItemFromCartStart = (item) => ({
  type: CLEAR_ITEM_FROM_CART_START,
  payload: item,
});

export const removeItemFromCartSuccess = (item) => ({
  type: REMOVE_ITEM_FROM_CART_SUCCESS,
  payload: item,
});

export const removeItemFromCartStart = (item) => ({
  type: REMOVE_ITEM_FROM_CART_START,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART
});