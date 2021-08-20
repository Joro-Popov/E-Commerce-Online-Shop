import { createSelector } from "reselect";
/*
    INPUT SELECTORS
    Returns only a slice of state
*/
const selectShop = (state) => state.shop;

/*
   OUTPUT SELECTORS
*/
export const selectShopItems = createSelector(
  [selectShop], // Receives only the cart state from global state
  (shop) => shop.collections // Returns only specific part from cart state
);
