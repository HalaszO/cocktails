import { combineReducers } from "redux";
import { cocktailReducer } from "./cocktail";
import { themeReducer } from "./theme";

export default combineReducers({
  cocktail: cocktailReducer,
  theme: themeReducer,
});
