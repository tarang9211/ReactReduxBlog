import { FETCH_POSTS } from '../actions/index';
import { FETCH_POST } from '../actions/index';

//app will fetch the list of all blog posts and an active blog post
//all = list of all posts
//post = active blog post
const INITIAL_STATE = { all: [], post: null};

//data will be nested in action.payload.data (axios creates a json response
//with some additional properties (config, headers, etc))
export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POSTS:
    return {...state, all: action.payload.data};

  case FETCH_POST:
    return {...state, post: action.payload.data};

  default:
    return state;
  }
}
