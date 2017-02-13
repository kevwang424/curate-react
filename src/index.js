import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root-reducer'
import ReduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './index.css'

const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
