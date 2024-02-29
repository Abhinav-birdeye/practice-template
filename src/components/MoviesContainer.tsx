import { Movie } from '../types/movie';
import {  clearMovies, setMovies } from './MoviesActions';
import { MoviesView } from './MoviesView';
import {useSelector, useDispatch} from "react-redux"


export const MoviesContainer = () => {
    const dispatch = useDispatch();
    const storeState = useSelector((state)=>state);
    return (
    <MoviesView
      movies={storeState as Movie[]}
      handleSetMovies={(payload)=>dispatch(setMovies(payload))}
      handleClearMovies={()=>dispatch(clearMovies(null))}
    />
  );
};
