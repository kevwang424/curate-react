import React from 'react'
import { Route, IndexRoute, browserHistory, Router } from 'react-router'
import {authenticate} from './auth/authenticator'

import App from './components/App'
import Welcome from './components/Welcome'
import UserSignUp from './components/UserSignUp'
import Login from './components/Login'
import User from './components/User'
import Gallery from './components/Gallery'


export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/user' component={User} onEnter={authenticate}/>
      <Route path='signup' component={UserSignUp}/>
      <Route path='login' component={Login}/>
    </Route>
  </Router>
)
