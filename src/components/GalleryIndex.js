import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserGalleries } from '../actions'
import { bindActionCreators } from 'redux'

class GalleryIndex extends Component {

  componentDidMount() {
    this.props.fetchUserGalleries()

  }
  render () {
    const {galleryIndex} = this.props
    const currentUserGalleries = galleryIndex.filter(g => g.user_id === 1)
    const galleryList = (gallery) => {
      return (
        <li key={gallery.id}> {gallery.name} </li>
      )
    }

    console.log(currentUserGalleries)
    if (!galleryIndex) {
      return <div>loading gallery list</div>
    } else {
      return (
        <div>
          <h1>Gallery List</h1>
            <ul>
              {currentUserGalleries.map(galleryList)}
            </ul>
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
  return bindActionCreators({fetchUserGalleries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryIndex)
