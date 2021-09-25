import axios from "axios";
import {
  FETCH_POKEDATA,
  SET_LOADING,
  SET_ERROR,
  FETCH_POKEDETAILS,
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

export function fetchPokemons() {
  return async function (dispatch, getState) {
    const url = getState().url;

    try {
      const pokeData = await axios.get(url);
      dispatch(setPokeData(pokeData.data.results));
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
