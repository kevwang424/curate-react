import React, { Component } from 'react'
import UserSignUp from './user-sign-up'
import logo from '../logo.svg'
import '../App.css'
import Gallery from './Gallery'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>It Do Curate</h2>
        </div>
        <UserSignUp />
        <Gallery />
      </div>
    )
  }
}

export default App
