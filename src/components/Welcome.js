import React from 'react'
import { Link } from 'react-router'

export default function Welcome(){
  return(
    <div className="container welcome">
      <div className="row off-lg-3">
        <h1 className="welcome-h1">Welcome to curate.it!</h1>
      </div>
      <div className="row off-lg-5">
        <p><Link to='/login'>Login</Link> or <Link to='/signup'>Sign Up</Link></p>
      </div>
    </div>
  )
}
