import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './store/reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import {apiWatcher} from './store/saga/sagaRequest'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';


//const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose 

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(apiWatcher)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

