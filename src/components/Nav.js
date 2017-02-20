import React, { Component } from 'react'
import { connect } from 'react-redux'
import GalleryIndex from './GalleryIndex'
import CreateGallery from './CreateGallery'
import Logout from './Logout'

class Nav extends Component {
  render(){
    return(
      <div>
        <div className="nav">
          <ul>
            <li><GalleryIndex /></li>
            <li><CreateGallery /></li>
            <li><Logout /></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(Nav)
