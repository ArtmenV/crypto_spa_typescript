import { CryptoReducer } from "./getApiData/reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  CryptoReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: AppState) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

export const store = configureStore();
