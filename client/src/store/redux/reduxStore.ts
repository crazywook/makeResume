import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import RootState from "./state";

const isProduct = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = isProduct
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configure(initialState: RootState | {} = {}) {

  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
}
