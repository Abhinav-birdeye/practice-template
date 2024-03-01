import { all, fork } from "redux-saga/effects";
import { movieSagas } from "../pages/home/MoviesSaga";

export function* rootSaga(){
    yield all([
        fork(movieSagas)
    ])
}