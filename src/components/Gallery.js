import React, { Component } from 'react'
import Piece from './Piece'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGallery, deleteGallery, openModal, closeModal } from '../actions'
import loading from '../assets/images/koolaid.png'
import Search from './Search'
import SearchResults from './SearchResults'
import EditGallery from './EditGallery'
import Modal from 'react-modal'


class Gallery extends Component{

  handleDelete =(event)=> {
    this.props.deleteGallery(this.props.gallery.id)
  }

  modalOpen(event) {
    event.preventDefault()
    this.props.openModal()
  }

  render(){
    const {gallery} = this.props
    if (!gallery.piece_ids) {
      return <div>loading gallery<img src={loading} className="loading" alt="spinner" /></div>
      }
    else {
    return(

      <div className="row">
        <div>
          <button className="btn" onClick={this.modalOpen.bind(this)}>Edit Gallery</button>
          <Modal className="modal-user-gallery" isOpen={this.props.isModalOpen} contentLabel='Modal'>
            <EditGallery name={gallery.name} description={gallery.description} gallery={gallery.id}/>
          </Modal>
        </div>
        <div className="col-lg-6 col-s-12">
          <Search />
          <SearchResults gallery={gallery.id} />
        </div>
        <div className="gallery col-lg-6 col-s-12">
          <h1>{gallery.name}</h1>
          <h2>{gallery.description}</h2>
          {gallery.piece_ids.map( piece_id => <Piece key={piece_id} id={piece_id} gallery_id={gallery.id}/>)}
          <button className="btn" type="submit" onClick={this.handleDelete}>Delete Gallery</button>
        </div>
      </div>
    )
  }
}
}

function mapStateToProps(state){
  return {
    gallery: state.gallery,
    isModalOpen: state.isModalOpen
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchGallery, deleteGallery, openModal, closeModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
