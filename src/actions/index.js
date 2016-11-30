import axios from 'axios';

const rootUrl = 'http://www.reduxblog.herokuapp.com/api';
const API_KEY = '?key=9211';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get(`${rootUrl}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
