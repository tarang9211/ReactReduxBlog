import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

//setting up routes for the app that maps to a components
export default (
  <Route path='/' component={App} />
);
