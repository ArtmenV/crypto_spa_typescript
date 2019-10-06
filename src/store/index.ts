import { NotesReducer } from "./InputField/reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const rootReducer = combineReducers({
  NotesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: AppState) =>
  createStore(rootReducer, initialState, composeEnhancers(applyMiddleware()));

export const store = configureStore();
