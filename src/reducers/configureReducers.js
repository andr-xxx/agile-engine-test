import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';


const middleware = [];

if (typeof window !== 'undefined' && module.hot) {
  middleware.push(logger);
}

export default function configureStore(reducer, middlewares) {
  return applyMiddleware(...middleware, middlewares)(createStore)(reducer);
}