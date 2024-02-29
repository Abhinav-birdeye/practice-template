import {call, put} from "redux-saga/effects";

export async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((json) => console.log(json));
    return response;
}

function* getPosts(){
    const response = yield call(fetchPosts);
    yield put(()=>{console.log(response)});
}

