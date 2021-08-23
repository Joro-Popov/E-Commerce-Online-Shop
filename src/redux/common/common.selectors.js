import { createSelector } from "reselect";
/*
    INPUT SELECTORS
    Returns only a slice of state
*/
const selectCommon = (state) => state.common;

/*
   OUTPUT SELECTORS
*/
export const selectIsLoading = createSelector(
  [selectCommon], // Receives only the cart state from global state
  (common) => common.isLoading // Returns only specific part from cart state
);

