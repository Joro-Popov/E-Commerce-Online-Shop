import { SET_IS_LOADING } from "./common.types";

const INITIAL_STATE = {
  isLoading: true,
};

const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
