import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Gallery from './Gallery'
import Nav from './Nav'
import { fetchUserGalleries, setUser } from '../actions'

class User extends Component{

  componentDidMount(){
    this.props.setUser()
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <Nav first_name={this.props.user.first_name}/>
          </div>
          <div className="col-lg-8 col-xs-12">
            <Gallery />
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserGalleries, setUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
