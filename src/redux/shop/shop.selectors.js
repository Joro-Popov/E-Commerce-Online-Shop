import { createSelector } from "reselect";
/*
    INPUT SELECTORS
    Returns only a slice of state
*/
const selectShop = (state) => state.shop;

/*
   OUTPUT SELECTORS
*/
export const selectCollections = createSelector(
  [selectShop], // Receives only the cart state from global state
  (shop) => shop.collections // Returns only specific part from cart state
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
);
