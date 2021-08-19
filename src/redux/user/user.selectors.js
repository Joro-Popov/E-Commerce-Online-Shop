import { createSelector } from "reselect";
/*
    INPUT SELECTORS
    Returns only a slice of state
*/
const selectUser = (state) => state.user;

/*
   OUTPUT SELECTORS
*/
export const selectCurrentUser = createSelector(
  [selectUser], // Receives only the cart state from global state
  (user) => user.currentUser // Returns only specific part from cart state
);

