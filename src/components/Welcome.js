import React from 'react'
// import Login from './Login'
// import UserSignUp from './UserSignUp'
import { Link } from 'react-router'
import loading from '../assets/images/koolaid.png'

export default function Welcome(){
  return(
    <div>
      <h1>Welcome to IT DO CURATE!</h1>
      <div className='nav flex-container__item'>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign Up!</Link></li>
        </ul>
        <img src={loading} className="loading" alt="spinner" />
      </div>

    </div>
  )
}
