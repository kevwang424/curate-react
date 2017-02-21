import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createSession } from '../actions'
import { connect } from 'react-redux'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createSession(this.state)
    this.refs.this_form.reset()
  }

  handleChange(event){
    let newState = Object.assign({}, this.state)
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  render(){
    return(
      <div className="container">
        <div className="row off-lg-3">
          <div className="form">
            <form onSubmit={this.handleSubmit} ref="this_form">
              <input name="email" ref="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
              <input name="password" type="password" ref="userPassword" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
              <button type="submit" className="btn">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createSession}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
