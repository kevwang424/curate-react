import React, { Component } from 'react'
import Piece from './Piece'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGallery } from '../actions'
import loading from '../assets/images/koolaid.png'

class Gallery extends Component{

  componentDidMount(){
    this.props.fetchGallery()
  }

  render(){
    const {gallery} = this.props

    if (!gallery.piece_ids) {
      return <div>loading gallery<img src={loading} className="loading" alt="spinner" /></div>
      }
    else {
    return(
      <div className="gallery">
        <h1>Gallery Component</h1>
        <h1>{gallery.name}</h1>
        <h1>{gallery.description}</h1>
        <div className="gallery__frame">
          {gallery.piece_ids.map( piece_id => <Piece key={piece_id} id={piece_id} />)}
        </div>
    </div>
    )
  }
}
}

function mapStateToProps(state){
  return {
    gallery: state.gallery
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
