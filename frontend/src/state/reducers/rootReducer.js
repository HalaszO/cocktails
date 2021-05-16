import { combineReducers } from "redux";
import { cocktailReducer } from "./cocktail";

export default combineReducers({
  cocktail: cocktailReducer,
});
