import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Gallery from './Gallery'
import Nav from './Nav'
import { fetchUserGalleries } from '../actions'

class User extends Component{
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <Nav />
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
  return bindActionCreators({fetchUserGalleries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
