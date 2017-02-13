import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import UserSignUp from './components/user-sign-up'
import Auth from './auth/authenticator'

export default (
  <Route path='/' component={App} >
    <Route path='signup' component={UserSignUp} />
  </Route>
)

function requireAuth(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
