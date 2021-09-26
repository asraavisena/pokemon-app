import {
  FETCH_POKEDATA,
  SET_LOADING,
  SET_ERROR,
  FETCH_POKEDETAILS,
  NEXT_URL,
  PREV_URL,
  URL_NEXT,
  URL_PREV,
} from "./actionType";

const initalState = {
  pokeData: [],
  error: [],
  isLoading: true,
  url: "https://pokeapi.co/api/v2/pokemon",
  pokeDetails: {},
  nextUrl: "",
  prevUrl: "",
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_POKEDATA:
      return {
        ...state,
        pokeData: [action.payload],
      };
    case SET_ERROR:
      return {
        ...state,
        error: [action.payload],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_POKEDETAILS:
      return {
        ...state,
        pokeDetails: action.payload,
      };
    case NEXT_URL:
      return {
        ...state,
        nextUrl: action.payload,
      };
    case PREV_URL:
      return {
        ...state,
        prevUrl: action.payload,
      };
    case URL_NEXT:
      return {
        ...state,
        url: state.nextUrl,
      };
    case URL_PREV:
      return {
        ...state,
        url: state.prevUrl,
      };
    default:
      return state;
  }
}
