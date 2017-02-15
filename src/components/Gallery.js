import React, { Component } from 'react'
import Piece from './Piece'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGallery } from '../actions'

class Gallery extends Component{

  componentDidMount(){
    this.props.fetchGallery()
  }

  render(){
    const {gallery} = this.props

    if (!gallery.piece_ids) {
      return <div> gallery loading</div>
      }
    else {
    return(
      <div>
        <h1>Gallery Component</h1>
        <h1>{gallery.name}</h1>
        <h1>{gallery.description}</h1>
        {gallery.piece_ids.map( piece_id => <Piece key={piece_id} id={piece_id} />)}
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
