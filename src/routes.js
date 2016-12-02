import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsDetail from './components/posts_detail'

//setting up routes for the app that maps to a components
//app is the root component for the app
export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path='/posts/new' component={PostsNew} />
    <Route path='/posts/:id' component={PostsDetail} />
  </Route>
);

//this.props.params.id
