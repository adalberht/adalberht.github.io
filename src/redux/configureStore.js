import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import createHistory from "history/createBrowserHistory";
import logger from "redux-logger";
import rootReducer from "./modules";

const isOnProduction = process.env.NODE_ENV === "production";

export default function configureStore(initialState) {
  const config = {
    key: "root",
    storage
  };

  // eslint-disable-next-line
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const history = createHistory();

  const enhancer = isOnProduction
    ? composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    : composeEnhancers(
        applyMiddleware(routerMiddleware(history), thunk, logger)
      );

  const store = createStore(
    persistCombineReducers(config, rootReducer),
    initialState,
    enhancer
  );
  const persistor = persistStore(store);

  if (!isOnProduction && module.hot) {
    module.hot.accept("./modules", () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require("./modules").default)
    );
  }

  return { history, persistor, store };
}
