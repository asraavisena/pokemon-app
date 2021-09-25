import axios from "axios";
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

function setPokeData(payload) {
  return {
    type: FETCH_POKEDATA,
    payload,
  };
}

function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}

function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

function setPokeDetails(payload) {
  return {
    type: FETCH_POKEDETAILS,
    payload,
  };
}

function setNextUrl(payload) {
  return {
    type: NEXT_URL,
    payload,
  };
}

function setPrevUrl(payload) {
  return {
    type: PREV_URL,
    payload,
  };
}

export function setUrlNext() {
  return {
    type: URL_NEXT,
  };
}

export function setUrlPrev() {
  return {
    type: URL_PREV,
  };
}

export function fetchPokemons() {
  return async function (dispatch, getState) {
    const url = getState().url;

    try {
      const pokeData = await axios.get(url);
      console.log(pokeData.data);
      dispatch(setPokeData(pokeData.data.results));
      dispatch(setNextUrl(pokeData.data.next));
      dispatch(setPrevUrl(pokeData.data.previous));
      console.log(pokeData.data.prev, "prev");
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchPokemonDetails(url) {
  return async function (dispatch, getState) {
    try {
      const pokeDetails = await axios.get(url);
      dispatch(setPokeDetails(pokeDetails.data));

      // dispatch(setPokeData(pokeData.data.results));
    } catch (err) {
      // dispatch(setError(err));
    } finally {
      // dispatch(setLoading(false));
    }
  };
}
