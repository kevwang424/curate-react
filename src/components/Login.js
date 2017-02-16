import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createSession, fetchUserGalleries, assignUser } from '../actions'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

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
    const response = this.props.createSession(this.state)
    this.props.assignUser(response)
    this.refs.this_form.reset()
  }

  handleChange(event){
    let newState = Object.assign({}, this.state)
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} ref="this_form">
          <input name="email" ref="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
          <input name="password" type="password" ref="userPassword" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createSession, fetchUserGalleries, assignUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
