import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=TAMTAMCHIK_74652';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_POST = 'create_post';

export const fetchPosts = () => {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
};

export const fetchPost = (id) => {
  const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
};

export const deletePost = (id, callback) => {
  axios.delete(`${API_URL}/posts/${id}${API_KEY}`).then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
};

export const createPost = (values, callback) => {
  const request = axios.post(`${API_URL}/posts${API_KEY}`, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
};
