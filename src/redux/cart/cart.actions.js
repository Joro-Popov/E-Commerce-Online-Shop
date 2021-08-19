import { TOGGLE_CART_DROPDOWN } from "./cart.types";

const toggleCartDropdownSuccess = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const toggleCartDropdown = () => async (dispatch) => {
  try {
    dispatch(toggleCartDropdownSuccess());
  } catch (error) {
    console.error(error);
  }
};
