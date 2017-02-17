import React, { Component } from 'react'
import logo from '../assets/images/koolaid.png'

import Welcome from './Welcome'
import { isLoggedIn } from '../auth/authenticator'

import { connect } from 'react-redux'


class App extends Component {
  // static hello = 'thisisntgointowork.. i make things up..it worked'

  render(){
    let loggedIn = null
      if(!isLoggedIn()){
        loggedIn = <Welcome/>
    }

    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>It Do Curate</h2>
          </div>
          <div>
            {loggedIn}
            {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect (mapStateToProps)(App)
