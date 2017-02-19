import React, { Component } from 'react'
import { fetchPiece } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import loading from '../assets/images/koolaid.png'
import Modal from 'react-modal'
import PieceShow from './PieceShow'


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
        {/* modal fn below to render out the pieceshow comp */}
          {/* <Modal isOpen={this.state.modalIsOpen} contentLabel='Modal'>
            <PieceShow onClick={this.closeModal.bind(this)}/>
          </Modal> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Piece)
