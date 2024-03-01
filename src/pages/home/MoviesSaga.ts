import {call, put, takeLatest} from "redux-saga/effects";
import { api } from "../../api/api";
import { Movies } from "../../types/movie";
import {  getMoviesError, getMoviesSuccess, movieActionTypes } from "./MoviesActions";

export async function fetchTrendingMovies(){
   const response = await api.get("/trending/movie/week");
   return response.data as Movies;
}

export function* getTrendingMovies(){
    try {
        const response:Movies = yield call(fetchTrendingMovies);
        yield put(getMoviesSuccess(response));
    } catch (error) {
        yield(put(getMoviesError(error)));
    }
}

export function* movieSagas(){
    yield takeLatest(movieActionTypes.GET_MOVIES, getTrendingMovies)
}

