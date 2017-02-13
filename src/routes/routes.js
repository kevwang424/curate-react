import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import UserSignUp from './components/user-sign-up'

export default (
  <Route path='/' component={App} >
  <Route path='signup' component={ UserSignUp }> //**
    < IndexRoute component={NoteApp} />
    < Route path='notes' component={NoteApp} >
      < Route path=':id' component={NoteShow} />
    < /Route>
    < Route path='about' component={About} />
  </Route>
)
