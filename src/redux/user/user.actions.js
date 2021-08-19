import {SET_CURRENT_USER} from './user.types';

const setCurrentuserSuccess = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setCurrentUser = (user) => async (dispatch) => {
  try {
    dispatch(setCurrentuserSuccess(user));
  } catch (error) {
    console.error(error)
  }
};

