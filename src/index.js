import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';

import {Provider} from 'react-redux'
import {storeData} from './store/store'

const store = storeData()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

