import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Gallery from './Gallery'

import { fetchUserGalleries } from '../actions'

class User extends Component{

  componentDidMount(){
    this.props.fetchUserGalleries()
  }

  render(){
    const { user } = this.props

    if (!user.gallery_ids) {
      return <div>user loading</div>
      }
    else {
    return(
      <div>
        <h1>User component</h1>
        {/* <Gallery id={2}/> */}
        {/* {user.gallery_ids.map( gallery_id => <Gallery key={gallery_id} id={gallery_id} />)} */}
    </div>
    )
    }
  }
}

function mapStateToProps(state, ownProps) {
  // const currentGallery = state.gallery.find(g=> ownProps.id === g.id)
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserGalleries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
