import { applyMiddleware, createStore, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import linguaApp from '../reducers'

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState) => createStore(
  linguaApp,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk, logger))
)