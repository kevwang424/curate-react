import React, { Component } from 'react'
import logo from '../assets/images/koolaid.png'
import yoko from '../assets/images/yoko.gif'
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
        <div className="flex-container">
          <header className="header">
            <div className="header__img"><img src={yoko} alt="yoko" height='150px' /></div>
            <img src={logo} className="header__logo" alt="logo" />
            <h1>It Do Curate</h1>
          </header>
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
