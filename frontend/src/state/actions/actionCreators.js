import axios from "axios";
import {
  LOAD_COCKTAILS_REQUEST,
  LOAD_COCKTAILS_ERROR,
  LOAD_COCKTAILS_SUCCESS,
  THEME_DARK_TOGGLED,
  THEME_LIGHT_TOGGLED,
} from "./actionTypes";
import { BACKEND_API_ENDPOINT } from "../../config";

export const toggleDarkTheme = () => {
  return (dispatch) => {
    dispatch({
      type: THEME_DARK_TOGGLED,
    });
  };
};

export const toggleLightTheme = () => {
  return (dispatch) => {
    dispatch({
      type: THEME_LIGHT_TOGGLED,
    });
  };
};

export const searchCocktails = (searchTerm) => {
  return async (dispatch) => {
    dispatch({
      type: LOAD_COCKTAILS_REQUEST,
    });

    try {
      // check cache
      let data = JSON.parse(
        sessionStorage.getItem(`cocktailapp::${searchTerm}`)
      );
      if (!data) {
        // make request
        const response = await axios.get(BACKEND_API_ENDPOINT, {
          params: {
            search: searchTerm,
          },
        });
        data = response.data;
        // save into cache
        sessionStorage.setItem(
          `cocktailapp::${searchTerm}`,
          JSON.stringify(data)
        );
      }
      // dispatch success action
      dispatch({ type: LOAD_COCKTAILS_SUCCESS, payload: data });
    } catch (err) {
      // dispatch error action
      dispatch({
        type: LOAD_COCKTAILS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getRandomCocktail = () => {
  return async (dispatch) => {
    dispatch({
      type: LOAD_COCKTAILS_REQUEST,
    });

    try {
      // making request
      const { data } = await axios.get(BACKEND_API_ENDPOINT);
      // dispatch success action
      dispatch({ type: LOAD_COCKTAILS_SUCCESS, payload: data });
    } catch (err) {
      // dispatch error action
      dispatch({
        type: LOAD_COCKTAILS_ERROR,
        payload: err.message,
      });
    }
  };
};
