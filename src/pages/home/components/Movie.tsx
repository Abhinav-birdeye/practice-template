import { type Movie as MovieProp } from "../../../types/movie"


interface MovieProps {
    movie: MovieProp;
}
export const Movie = ({ movie }: MovieProps) => {
    return (
        <li key={movie?.original_title} className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-start">
                <p className="flex gap-2 items-center">
                    <p className="text-3xl line-clamp-2 text-left">
                        {movie?.original_title}
                    </p>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="text-xl font-semibold">
                        {movie?.vote_average}</span>
                </p>
                <p className="text-sm line-clamp-4 text-left">{movie?.overview}</p>
            </div>
            <div className="flex flex-col items-end">
                <img className="max-h-[200px] object-fill object-center" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
            </div>
        </li>
    )
}
