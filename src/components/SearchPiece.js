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

  addToGallery(event){
    event.preventDefault()

    const pieceInfo = {
      title: this.props.details.title,
      artist_name: this.props.details.people[0].name,
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
      <div >
        <form>
          <h1>Title: {details.title}</h1>
          <Modal isOpen={this.state.modalIsOpen}>
            <img alt={details.title} src={details.primaryimageurl}
              onClick={this.closeModal.bind(this)}/></Modal>
          <img alt={details.title} src={details.primaryimageurl} onClick={this.handleClick.bind(this)}/>
          <h4> Artist: {details.people[0].name ? details.people[0].name : "Not Listed"} </h4>
          <h4>Century: {details.century}</h4>
          <h4>Classification: {details.classification}</h4>
          <h4> Dimensions: {details.dimensions ? details.dimensions : "Not Found"}</h4>
          <input type="button" value="Add To Gallery" onClick={this.addToGallery.bind(this)}/>
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addPieceToDb}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchPiece)
