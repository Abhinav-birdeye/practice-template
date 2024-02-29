import { legacy_createStore } from "redux";
import { moviesReducer } from "../components/MoviesReducer";

export const appStore = legacy_createStore(moviesReducer);