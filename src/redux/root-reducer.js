import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import userReducer from './user/user-reducer';

const createAppReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
  });

export default createAppReducer;