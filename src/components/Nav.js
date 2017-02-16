import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { destroySession } from '../actions'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

class Nav extends Component {

  handleLogOut(event) {
    event.preventDefault()
    this.props.destroySession()
  }

  render(){
    return(
      <div>
        <button type="submit" onClick={this.handleLogOut.bind(this)}>Log Out</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({destroySession}, dispatch)
}

export default connect(null, mapDispatchToProps)(Nav)
