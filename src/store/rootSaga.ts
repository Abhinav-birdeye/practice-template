import { all, fork } from "redux-saga/effects";
import { movieSagas } from "../components/MoviesSaga";

export function* rootSaga(){
    yield all([
        fork(movieSagas)
    ])
}