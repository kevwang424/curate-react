import React from 'react'
import { Link } from 'react-router'

export default function Welcome(){
  return(
    <div>
      <div className="row col-xs-12">
        <h1>Welcome to IT DO CURATE!</h1>
        <div className='row col-xs-12'>
        <p><Link to='/login'>Login</Link> or <Link to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
