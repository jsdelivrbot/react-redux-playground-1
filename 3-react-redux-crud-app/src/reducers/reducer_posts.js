import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}


