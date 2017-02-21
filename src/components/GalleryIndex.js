import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserGalleries, fetchGallery } from '../actions'
import { bindActionCreators } from 'redux'
import loading from '../assets/images/koolaid.png'

class GalleryIndex extends Component {

  componentDidMount() {
    this.props.fetchUserGalleries()
  }


  handleOnClick(event){
    event.preventDefault()
    // debugger
    this.props.fetchGallery(this.refs.user_gallery.value)
  }

  render () {
    const {galleryIndex} = this.props

    const galleryList = (gallery) => {
      return (
        <option key={gallery.id} value={gallery.id}>{gallery.name}</option>
      )
    }

    if (!galleryIndex) {
      return <div>loading<img src={loading} className="loading" alt="spinner" /> </div>
    } else {
      return (
        <div>
          <div className="nav">
            <form onSubmit={this.handleOnClick.bind(this)}>
            <select ref="user_gallery">
              {galleryIndex.map(galleryList)}
            </select>
            <button className="btn" type="submit" onClick={this.handleOnClick.bind(this)}>Show Me My Galleries</button>
          </form>
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
