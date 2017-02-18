import React from 'react'
import { Route, browserHistory, Router } from 'react-router'
import {authenticate} from './auth/authenticator'

import App from './components/App'
import UserSignUp from './components/UserSignUp'
import Login from './components/Login'
import User from './components/User'
import EditGallery from './components/EditGallery'


export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='user' component={User} onEnter={authenticate} />
      <Route path='signup' component={UserSignUp} />
      <Route path='login' component={Login} />
      <Route path='edit' component={EditGallery} />
    </Route>
  </Router>
)
