import { Movie } from '../types/movie';
import { MovieAction } from './MoviesActions';

const defaultMoviesState:Movie[] = [];

export function moviesReducer(state = defaultMoviesState, action: MovieAction) {
  switch (action.type) {
    case 'pages/movies/GET_MOVIES': {
      return state;
    }
    case 'pages/movies/SET_MOVIES': {
      const payload = action.payload;
      return [...state,...payload];
    }
    case "pages/movies/CLEAR_MOVIES":{
        return [];
    }
  }
}
