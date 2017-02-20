import React, { Component } from 'react'
import Welcome from './Welcome'
import { isLoggedIn } from '../auth/authenticator'
import { connect } from 'react-redux'


class App extends Component {

  render(){
    let loggedIn = null
      if(!isLoggedIn()){
        loggedIn = <Welcome/>
    }

    return (
      <div>
        <div className="row">
            <header className="header">
              <div className="col-xs-6">
                <h1>It Do Curate</h1>
              </div>
            </header>
        </div>
        <div className="row">
          <div className="col-xs-12">
          {loggedIn}
          </div>
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
