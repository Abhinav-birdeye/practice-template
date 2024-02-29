import { createActionTypes } from '../utils/createActionTypes';
import { Movie } from '../types/movie';

const MOVIES_PREFIX = 'pages/movies';

const MOVIES_ACTIONS = ['GET_MOVIES', 'SET_MOVIES', "CLEAR_MOVIES"] as const;

const movieActionTypes = createActionTypes(MOVIES_PREFIX, MOVIES_ACTIONS);

export type ActionKeys = keyof typeof movieActionTypes;
export type ActionValues = typeof movieActionTypes[ActionKeys];

export function getMovies(payload: Movie[]) {
  return {
    type: movieActionTypes.GET_MOVIES,
    payload,
  };
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

export const movieActions = [getMovies, setMovies, clearMovies] as const;

export type MovieAction = ReturnType<typeof movieActions[number]>;
