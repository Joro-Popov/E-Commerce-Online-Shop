import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const createAppReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
  });

export default createAppReducer;