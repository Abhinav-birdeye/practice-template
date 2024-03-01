import { Movies } from "../../types/movie";
import { Movie } from "./components/Movie";


interface MoviesViewProps {
    movies: Movies | null;
    isLoading?: boolean;
}


export const MoviesView = (props: MoviesViewProps) => {
    const { movies, isLoading } = props;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <ul className="space-y-2 border border-dashed p-8 max-w-2xl">
                {movies?.results?.map((movie) => (
                    <Movie key={movie?.id} movie={movie} />
                ))}
            </ul>
            <div className="flex justify-between items-center my-2">
                <div>
                    <p className="font-semibold text-lg">
                        {movies?.total_results}
                    </p>
                    <p className="p-2">
                        Results
                    </p>
                </div>
                <div
                >
                    <p className="font-semibold text-lg">
                        {movies?.total_pages}
                    </p>
                    <p className="p-2">
                        Pages
                    </p>
                </div>
            </div>
        </div>
    );
};
