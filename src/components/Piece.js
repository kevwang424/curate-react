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

  // handleSubmit(event){
  //   event.preventDefault()
  //   const commentary = { commentary: this.refs.commentary.value }
  //   this.props.addCommentary(commentary)
  //   this.refs.commentary_form.reset()
  // }


  render(){
    const {piece} = this.props
    if (piece){
      return(
      <div className="gallery__frame" onClick={this.handleClick.bind(this)}>
        <h1>Title: {piece.title}</h1>
        <img alt={piece.title} src={piece.image_url}/>
           <Modal className="modal-user-gallery" isOpen={this.state.modalIsOpen} contentLabel='Modal'>
             <Modal className="modal-box-item--top" contentLabel='Modal'></Modal>
             <h2 onClick={this.closeModal.bind(this)}>Title: {piece.title}</h2>
             <h4>Artist: {piece.artist_name}</h4>
             <h4>Classification: {piece.classifcation}</h4>
             <h4>Century: {piece.century}</h4>
             <h4>Culture: {piece.culture}</h4>
             <h4>Dimensions: {piece.dimensions}</h4>
             <h4>Label Text: {piece.label_text}</h4>
             <h4>Dated: {piece.dated}</h4>
             <h4>commentary: {piece.commentary}</h4>
             {/* <form className="good-form flex-container__item" ref="commentary_form">
             <input ref="commentary" placeholder="Enter comments"/>
             <button type="submit" className="btn" onSubmit={this.handleSubmit.bind(this)}>Submit</button>
           </form> */}
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
