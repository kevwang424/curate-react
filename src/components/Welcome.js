import React from 'react'
import Login from './Login'
import UserSignUp from './UserSignUp'
import { Link } from 'react-router'

export default function Welcome(){
  return(
    <div>
      <h1>Welcome to IT DO CURATE!</h1>
      <Link to='/login'>Login</Link><br/>
      <Link to='/signup'>Sign Up!</Link>
    </div>
  )
}
