import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=TAMTAMCHIK_74652';

export const FETCH_POSTS = 'fetch_posts';

export const fetchPosts = () => {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
};
