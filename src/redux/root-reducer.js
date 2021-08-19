import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const createAppReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    cart: cartReducer,
  });

export default createAppReducer;