import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'

import {Provider} from 'react-redux';
import createStore from './reducers/configureReducers';
import mainReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, sagaMiddleware);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
