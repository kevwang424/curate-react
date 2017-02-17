import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/index'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      password: this.refs.userPassword.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }
    this.props.createUser(user)
    this.refs.this_form.reset()
  }

  render(){
    return(
      <div className="good-form flex-container__item">
        <form onSubmit={this.handleSubmit} ref="this_form">
          <input ref="first_name" placeholder="Enter First Name"/>
          <input ref="last_name" placeholder="Enter Last Name"/>
          <input ref="email" placeholder="Enter Email"/>
          <input type="password" ref="userPassword" placeholder="Enter Password" />
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password" />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
