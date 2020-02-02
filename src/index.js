import "regenerator-runtime/runtime";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PropTypes from 'prop-types';
import RootReducer from './app/reducers/all';
import RootSaga from './app/sagas';
import App from './app/components/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga);

Provider.propTypes = {
  store: PropTypes.object.isRequired
};

store.subscribe(() => {
  // let newState = store.getState();
  // console.log("New `store` state: ", newState);
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('o-app-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
