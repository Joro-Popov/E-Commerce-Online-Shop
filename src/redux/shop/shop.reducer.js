import { SET_COLLECTIONS } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload,
      }
    }
    default:
      return state;
  }
};

export default shopReducer;
