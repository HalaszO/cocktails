import {
  THEME_DARK_TOGGLED,
  THEME_LIGHT_TOGGLED,
} from "../actions/actionTypes";

const initialState = {
  theme: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_DARK_TOGGLED:
      return { ...state, theme: "dark" };
    case THEME_LIGHT_TOGGLED:
      return { ...state, theme: "light" };
    default:
      return state;
  }
};

export { reducer as themeReducer };
