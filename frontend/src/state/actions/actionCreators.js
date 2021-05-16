import axios from "axios";
import {
  LOAD_COCKTAILS_REQUEST,
  LOAD_COCKTAILS_ERROR,
  LOAD_COCKTAILS_SUCCESS,
} from "./actionTypes";
import { BACKEND_API_ENDPOINT } from "../../config";

export const searchCocktails = (searchTerm) => {
  return async (dispatch) => {
    dispatch({
      type: LOAD_COCKTAILS_REQUEST,
    });

    try {
      // making request
      const { data } = await axios.get(BACKEND_API_ENDPOINT, {
        params: {
          search: searchTerm,
        },
      });
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
