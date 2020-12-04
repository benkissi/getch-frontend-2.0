import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);

  persistStore(store);

const makeStore = (initialState) => {
  return store
}

export default makeStore

