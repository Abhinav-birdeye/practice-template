import { useDispatch, useSelector } from 'react-redux';
import { getMovies, } from './MoviesActions';
import { MoviesView } from './MoviesView';
import { useEffect } from 'react';
import { MoviesState } from './MoviesReducer';

export const MoviesContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: MoviesState) => state?.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [])

  return (
    <MoviesView
      movies={state?.data}
      isLoading={state?.isLoading}
    />
  );
};
