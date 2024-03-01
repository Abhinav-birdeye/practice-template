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
      <ul className="space-y-2 border border-dashed p-8">
        {movies?.results?.map((movie) => (
          <li key={movie?.original_title} className="flex justify-between">
            <p className="text-2xl">
              {movie?.original_title}
            </p>
            <p className="text-2xl font-semibold">{movie?.vote_average}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center my-2">
        <div>
          <p className="font-semibold text-lg">
            {movies?.total_results}
          </p>
          <p>
            Results
          </p>
        </div>
        <div
        >
          <p className="font-semibold text-lg">
            {movies?.total_pages}
          </p>
          <p>
            Pages
          </p>
        </div>
      </div>
    </div>
  );
};
