import { combineReducers } from "redux";
import { moviesReducer } from "../components/MoviesReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer
})