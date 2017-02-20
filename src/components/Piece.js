import React, { Component } from 'react'
import { fetchPiece } from '../actions'
// import { fetchPiece, addCommentary } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import loading from '../assets/images/koolaid.png'
import Modal from 'react-modal'

class Piece extends Component{
  constructor(){
    super()
    this.state = { modalIsOpen : false }
  }

  componentDidMount(){
    this.props.fetchPiece(this.props.id)
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
    const {piece} = this.props
    if (piece){
      return(
      <div className="gallery__frame" onClick={this.handleClick.bind(this)}>
        <h1>Title: {piece.title}</h1>
        <img alt={piece.title} src={piece.image_url}/>
           <Modal className="modal-user-gallery" isOpen={this.state.modalIsOpen} contentLabel='Modal'>
             <Modal className="modal-box-item--top" contentLabel='Modal'></Modal>
             <ul>
             <li><h2 onClick={this.closeModal.bind(this)}>Title: {piece.title}</h2></li>
             <li><h4>Artist: {piece.artist_name}</h4></li>
             <li><h4>Classification: {piece.classifcation}</h4></li>
             <li><h4>Century: {piece.century}</h4></li>
             <li><h4>Culture: {piece.culture}</h4></li>
             <li><h4>Dimensions: {piece.dimensions}</h4></li>
             <li><h4>Label Text: {piece.label_text}</h4></li>
             <li><h4>Dated: {piece.dated}</h4></li>
             <li><h4>commentary: {piece.commentary}</h4></li>
           </ul>
           <Modal className="modal-box-item--bottom" contentLabel='Modal'></Modal>
          </Modal>
    </div>)
  } else {
    return <div><img src={loading} className="loading" alt="spinner" /></div>
  }
}
}

function mapStateToProps(state, ownProps) {
  const currentPiece = state.piece.find(p => ownProps.id === p.id)
  return {
    piece: currentPiece
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPiece }, dispatch)
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPiece, addCommentary }, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Piece)
