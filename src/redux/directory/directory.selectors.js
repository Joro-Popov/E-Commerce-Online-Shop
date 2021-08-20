import { createSelector } from "reselect";
/*
    INPUT SELECTORS
    Returns only a slice of state
*/
const selectDirectory = (state) => state.directory;

/*
   OUTPUT SELECTORS
*/
export const selectSections = createSelector(
  [selectDirectory], // Receives only the cart state from global state
  (directory) => directory.sections // Returns only specific part from cart state
);
