import {SET_CURRENT_USER} from '../actionTypes';

const setCurrentuserSuccess = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// Composite Action Creators
export const setCurrentUser = (user) => async (dispatch) => {
  try {
    dispatch(setCurrentuserSuccess(user));
  } catch (error) {
    console.error(error)
  }
};

