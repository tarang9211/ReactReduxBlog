import axios from 'axios';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=9211';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
  const request = axios.get(`${rootUrl}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${rootUrl}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}
