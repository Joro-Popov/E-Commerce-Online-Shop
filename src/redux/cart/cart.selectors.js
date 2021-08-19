import { createSelector } from "reselect";
/*
    INPUT SELECTORS
    Returns only a slice of state
*/
const selectCart = (state) => state.cart;

/*
   OUTPUT SELECTORS
*/
export const selectCartItems = createSelector(
  [selectCart], // Receives only the cart state from global state
  (cart) => cart.cartItems // Returns only specific part from cart state
);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
)
