import { createActionTypes } from '../utils/createActionTypes';
import { Movie } from '../types/movie';

const MOVIES_PREFIX = 'pages/movies';

const MOVIES_ACTIONS = ['GET_MOVIES', "GET_MOVIES_SUCCESS", 'SET_MOVIES', "CLEAR_MOVIES", "SET_ERROR", "SET_LOADING"] as const;

export const movieActionTypes = createActionTypes(MOVIES_PREFIX, MOVIES_ACTIONS);

export type ActionKeys = keyof typeof movieActionTypes;
export type ActionValues = typeof movieActionTypes[ActionKeys];

export function getMovies() {
  return {
    type: movieActionTypes.GET_MOVIES,
    payload: null,
  };
}
export function getMoviesSuccess(payload:unknown) {
  return {
    type: movieActionTypes.GET_MOVIES_SUCCESS,
    payload,
  };
}

export function getMoviesError(payload:unknown){
  return {
    type: movieActionTypes.SET_ERROR,
    payload,
  }
}

export function setMovies(payload: Movie[]) {
  return {
    type: movieActionTypes.SET_MOVIES,
    payload,
  };
}

export function clearMovies(payload:null){
    return {
        type: movieActionTypes.CLEAR_MOVIES,
        payload,
    }
}




export const movieActions = [getMovies, setMovies, clearMovies, getMoviesSuccess] as const;

export type MovieAction = ReturnType<typeof movieActions[number]>;
