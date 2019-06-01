import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxWebsocket from 'react-redux-websocket';

import 'font-awesome/css/font-awesome.css';

import rootReducer from './reducers';
import Routes from './router';
import logger from './utils/logger';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  </Provider>
);

// eslint-disable-next-line no-undef
const socket = new WebSocket('ws://localhost:9999');
const store = createStore(rootReducer, applyMiddleware(logger, reduxWebsocket(socket)));
store.subscribe(() => { console.log('store', store.getState()); });

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
