import { Movies } from "../types/movie";


interface MoviesViewProps {
  movies: Movies | null;
  isLoading?: boolean;
}


export const MoviesView = (props: MoviesViewProps) => {
  const { movies, isLoading } = props;
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>Movie List</h2>
      <p>Total Results: {movies?.total_results}</p>
      <p>Total Pages: {movies?.total_pages}</p>
      <ul>
        {movies?.results?.map((movie) => (
          <li key={movie?.original_title}>
            <span>
              {movie?.original_title}
            </span>
            <span>{movie?.poster_path}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
