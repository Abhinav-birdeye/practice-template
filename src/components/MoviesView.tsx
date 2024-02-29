import { Movie } from '../types/movie';

interface MoviesViewProps {
  movies:Movie[];
  handleSetMovies: (payload: Movie[]) => void;
  handleClearMovies: ()=>void;
}

const DUMMY_MOVIES_LIST = [{
  name:"DUNE",
  actors:[],
  director:"Denis Villeneuve",
  genre:"SCI_FI",
  year:2021
}] satisfies Movie[];

export const MoviesView = (props: MoviesViewProps) => {
  const { movies, handleSetMovies, handleClearMovies } = props;
  const onSetMovie = () =>{
    handleSetMovies(DUMMY_MOVIES_LIST)
  }
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies?.map((movie)=>(
          <li key={movie?.name}>{movie?.name}</li>
        ))}
      </ul>
      <h3>Actions</h3>
      <button onClick={onSetMovie}>SET MOVIES</button>
      <button onClick={handleClearMovies}>CLEAR MOVIES</button>
    </div>
  );
};
