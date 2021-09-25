import {
  FETCH_POKEDATA,
  SET_LOADING,
  SET_ERROR,
  FETCH_POKEDETAILS,
} from "./actionType";

const initalState = {
  pokeData: [],
  error: [],
  isLoading: true,
  url: "https://pokeapi.co/api/v2/pokemon",
  pokeDetails: {},
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
    default:
      return state;
  }
}
