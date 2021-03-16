import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import {apiWatcher} from './saga/sagaRequest'
import { composeWithDevTools } from 'redux-devtools-extension';

export const storeData = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
  ));
  sagaMiddleware.run(apiWatcher)
  return store
}

