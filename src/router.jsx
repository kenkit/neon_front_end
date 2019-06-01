import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import App from './App';
import Dashboard from './containers/Dashboard';
import NotFound from './components/NotFound';

const routes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default hot(routes);
