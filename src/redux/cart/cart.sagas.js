import { takeLatest, put, all, call } from "redux-saga/effects";
import { SIGN_OUT_SUCCESS } from "../user/user.types";
import {
  ADD_ITEM_TO_CART_START,
  CLEAR_ITEM_FROM_CART_START,
  REMOVE_ITEM_FROM_CART_START,
  TOGGLE_CART_DROPDOWN_START,
} from "./cart.types";

import {
  clearCart,
  addItemToCartSuccess,
  clearItemFromCartSuccess,
  removeItemFromCartSuccess,
  toggleCartDropdownSuccess
} from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* addItemToCart({ payload }) {
  yield put(addItemToCartSuccess(payload));
}

export function* clearItemFromCart({ payload }) {
  yield put(clearItemFromCartSuccess(payload));
}

export function* removeItemFromCart({payload}) {
  yield put(removeItemFromCartSuccess(payload));
}

export function* toggleDropdown() {
  yield put(toggleCartDropdownSuccess());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onAddItemToCartStart() {
  yield takeLatest(ADD_ITEM_TO_CART_START, addItemToCart);
}

export function* onClearItemFromCartStart() {
  yield takeLatest(CLEAR_ITEM_FROM_CART_START, clearItemFromCart);
}

export function* onRemoveItemFromCartStart() {
  yield takeLatest(REMOVE_ITEM_FROM_CART_START, removeItemFromCart)
}

export function* onToggleDropdownStart() {
  yield takeLatest(TOGGLE_CART_DROPDOWN_START, toggleDropdown)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onAddItemToCartStart),
    call(onClearItemFromCartStart),
    call(onRemoveItemFromCartStart),
    call(onToggleDropdownStart)
  ]);
}
