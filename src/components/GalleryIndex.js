import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserGalleries, fetchGallery} from '../actions'
import { bindActionCreators } from 'redux'
import loading from '../assets/images/koolaid.png'

class GalleryIndex extends Component {

  componentDidMount() {
    this.props.fetchUserGalleries()
  }

  handleOnClick(galleryId){
    this.props.fetchGallery(galleryId)
  }

  render () {
    const {galleryIndex} = this.props

    const galleryList = (gallery) => {
      return (
        <li key={gallery.id} onClick={this.handleOnClick.bind(this, gallery.id)}><a>{gallery.name}</a></li>
      )
    }

    if (!galleryIndex) {
      return <div>loading<img src={loading} className="loading" alt="spinner" /> </div>
    } else {
      return (
        <div>
          <div className="nav">
            <ul>
              {galleryIndex.map(galleryList)}
            </ul>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    galleryIndex: state.galleryIndex
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchUserGalleries, fetchGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryIndex)
