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
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
)