import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/index'
import { connect } from 'react-redux'

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
      <div className="container">
        <div className="row off-lg-3">
          <div className="form">
            <form onSubmit={this.handleSubmit} ref="this_form">
              <input ref="first_name" placeholder="First Name"/>
              <input ref="last_name" placeholder="Last Name"/>
              <input ref="email" placeholder="Email"/>
              <input type="password" ref="userPassword" placeholder="Password" />
              <input type="password" ref="passwordConfirmation" placeholder="Verify Password" />
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
