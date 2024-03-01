import { legacy_createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../pages/home/MoviesReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";


const sagaMiddleWare = createSagaMiddleware()

export const appStore = legacy_createStore(moviesReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga)
