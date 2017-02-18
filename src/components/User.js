import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Gallery from './Gallery'
import CreateGallery from './CreateGallery'
import GalleryIndex from './GalleryIndex'
import Logout from './Logout'
import { fetchUserGalleries } from '../actions'

class User extends Component{
  render(){
    return(
      <div>
        <Logout />
        <h1>User component</h1>
        <GalleryIndex />
        <CreateGallery />
        <Gallery />
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
