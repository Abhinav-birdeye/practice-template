import { Movies } from '../types/movie';
import { MovieAction } from './MoviesActions';

export interface MoviesState {
  movies:{
    data:Movies | null
    isLoading: boolean;
    errors: unknown
  }
}

const defaultMoviesState = {
  movies:{
    data:null,
    isLoading:false,
    errors:null
  }
} satisfies MoviesState;

export function moviesReducer(state = defaultMoviesState, action: MovieAction) {
  switch (action.type) {
    case 'pages/movies/GET_MOVIES': {
     return {...state, movies:{...state.movies, isLoading:true}}
    }
    case "pages/movies/GET_MOVIES_SUCCESS":{
      return {...state, movies:{...state.movies, data:action.payload ,isLoading:false}}
    }
    case 'pages/movies/SET_MOVIES': {
      const payload = action.payload;
      return payload;
    }
    case "pages/movies/CLEAR_MOVIES":{
        return [];
    }
  }
}
