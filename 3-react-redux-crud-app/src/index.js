import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostIndex from './components/PostIndex';
import PostShow from './components/PostShow';
import PostNew from './components/PostNew';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(logger, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostNew}/>
        <Route path="/posts/:id" component={PostShow}/>
        <Route path="/" component={PostIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
