import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { throttle } from "../utils/helpers";

import createAppReducer from "./root-reducer";
import { RESET_STORE } from "./actionTypes";

export const history = createBrowserHistory();

const appReducer = createAppReducer(history);

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  saveState(state);

  return appReducer(state, action);
};

const loadState = () => {
  try {
    const currentVersion = localStorage.getItem("app-version");

    if (currentVersion !== process.env.REACT_APP_VERSION) {
      localStorage.setItem("app-version", process.env.REACT_APP_VERSION);

      return undefined;
    }

    const serializedState = localStorage.getItem("state");

    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // TODO: Log errors
    if (process.env.NODE_ENV === "development") {
      console.error(`Save state error: ${err}`);
    }
  }
};

const middlewares = [routerMiddleware(history), thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(
  throttle(() => {
    const { applicationLoader, ...state } = store.getState();
    saveState(state);
  }, 1000)
);

export default store;
