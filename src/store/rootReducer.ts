import { combineReducers } from "redux";
import { moviesReducer } from "../pages/home/MoviesReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer
})