import React from 'react'
// import Login from './Login'
// import UserSignUp from './UserSignUp'
import { Link } from 'react-router'
import loading from '../assets/images/koolaid.png'

export default function Welcome(){
  return(
    <div>
      <h1>Welcome to IT DO CURATE!</h1>
      <Link to='/login'>Login</Link><br/>
      <Link to='/signup'>Sign Up!</Link>
      <br/><br/>
      <img src={loading} className="loading" alt="spinner" />
    </div>
  )
}
