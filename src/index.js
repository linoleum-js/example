import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import AuthForm from './containers/AuthForm/AuthForm';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={AuthForm} path="*" />
    </Router>
  </Provider>,
  document.getElementById('container')
);