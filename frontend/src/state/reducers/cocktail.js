import {
  LOAD_COCKTAILS_REQUEST,
  LOAD_COCKTAILS_ERROR,
  LOAD_COCKTAILS_SUCCESS,
} from "../actions/actionTypes";

// State contains the state of the data fetching
const initalState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_COCKTAILS_REQUEST:
      return { ...state, loading: true, error: null, data: [] };
    case LOAD_COCKTAILS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case LOAD_COCKTAILS_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export { reducer as cocktailReducer };
