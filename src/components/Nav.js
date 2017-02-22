import React, { Component } from 'react'
import { connect } from 'react-redux'
import GalleryIndex from './GalleryIndex'
import CreateGallery from './CreateGallery'
import Logout from './Logout'

class Nav extends Component {
  render(){
    return(
      <div className="nav">
        <div className="nav__item-name">
        <p className="small-font">Hello, {this.props.first_name}!</p>
        </div>
          <div className="nav__item-index">
            <GalleryIndex />
          </div>
          <div className="nav__item">
            <CreateGallery />
          </div>
          <div className="nav__item">
            <Logout />
          </div>
      </div>
    )
  }
}

export default connect()(Nav)
