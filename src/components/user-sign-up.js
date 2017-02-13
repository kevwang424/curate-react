import React, {Component} from 'react'

class UserSignUp extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.userPassword.value,
      password_confirmation: this.refs.passwordConfirmation.value,
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="userName" />
          <input type="text" ref="email" />
          <input type="password" ref="userPassword" placeholder="Enter Password" />
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
