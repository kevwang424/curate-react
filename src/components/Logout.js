import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { destroySession } from '../actions'
import { connect } from 'react-redux'

class Logout extends Component {

  handleLogOut(event) {
    event.preventDefault()
    this.props.destroySession()
    
  }

  render(){
    return(
      <div>
        <button className="btn" type="submit" onClick={this.handleLogOut.bind(this)}>Log Out</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({destroySession}, dispatch)
}

export default connect(null, mapDispatchToProps)(Logout)
