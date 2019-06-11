import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

// with async/await
export function fetchPosts() {
  return async function(dispatch, getState) {
    const { data: posts } = await axios.get(`/api/posts`);
    dispatch({ type: FETCH_POSTS, payload: posts });
    console.log(getState());
  };
}

export function createPost(postData) {
  return async function(dispatch) {
    const { data: post } = await axios.post(`/api/posts`, postData);
    dispatch({ type: NEW_POST, payload: post });
  };
}

// with .then
/* export function fetchPosts() {
  return function(dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      dispatch({ type: FETCH_POSTS, payload: res.data });
    });
  };
} */
