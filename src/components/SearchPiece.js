import React, { Component } from 'react'
import Modal from 'react-modal'
import { addPieceToDb } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class SearchPiece extends Component {

  constructor(){
    super()
    this.state = {modalIsOpen: false}
  }

  addToGallery (event){
    event.preventDefault()

    const pieceInfo = {
      title: this.props.details.title,
      artist_name: (this.props.details.people ? this.props.details.people[0].name : "Not Listed"),
      classification: this.props.details.classifcation,
      century: this.props.details.century,
      culture: this.props.details.culture,
      image_url: this.props.details.primaryimageurl,
      dimensions: this.props.details.dimensions,
      label_text: this.props.details.labeltext,
      commentary: this.props.details.commentary,
      dated: this.props.details.dated,
      api_id: this.props.details.objectid,
      gallery_id: this.props.gallery
    }

    this.props.addPieceToDb(pieceInfo)

  }

  handleClick(event){
    event.stopPropagation()
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    })
  }

  render(){

    const { details } = this.props

    return(
      <div className="flex-container">
        <div className="row">
          <div className="col-xs-6 col-sm-3 col-md-2 col-lg-1">
        <form>
          <h5>{details.title}</h5>
          <Modal className="modal-gallery" isOpen={this.state.modalIsOpen} contentLabel='Modal'>
            <img alt={details.title} src={details.primaryimageurl}
              onClick={this.closeModal.bind(this)}/>
            </Modal>
          <img alt={details.title} src={details.primaryimageurl} onClick={this.handleClick.bind(this)}/>
          <p className="med-font">
          Artist: {details.people ? details.people[0].name : "Not Listed"}<br/>
          Century: {details.century}<br/>
          Classification: {details.classification}<br/>
          Dimensions: {details.dimensions ? details.dimensions : "Not Found"}<br/>
          </p>
          <button type="submit" className="btn .btn--s" onClick={this.addToGallery.bind(this)}> + </button>
        </form>
        </div>
      </div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addPieceToDb}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchPiece)
