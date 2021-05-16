import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// reducers, init state, thunk middleware
export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
