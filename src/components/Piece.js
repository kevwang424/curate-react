import React, { Component } from 'react'
import { fetchPiece, removePiece } from '../actions'
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

  removePiece(event){
    event.preventDefault()
    this.props.removePiece(this.props.id, this.props.gallery_id )
  }

  render(){
    const {piece} = this.props
    if (piece){
      return(
        <div>
          <div className="gallery__frame" onClick={this.handleClick.bind(this)}>
            <h3>{piece.title}</h3>
            <img alt={piece.title} src={piece.image_url}/>
               <Modal className="modal-user-gallery" isOpen={this.state.modalIsOpen} contentLabel='Modal'>
                <h4>Title: {piece.title}</h4>
                 <p>Artist: {piece.artist_name}</p>
                 <p>Dated: {piece.dated}</p>
                 <p>Classification: {piece.classifcation}</p>
                 <p>Dimensions: {piece.dimensions}</p>
                 <p>Culture: {piece.culture}</p>
                <p>Century: {piece.century}</p>
                 <p>Label Text: {piece.label_text}</p>
                 <p>Commentary: {piece.commentary}</p>
               <button className="btn" onClick={this.closeModal.bind(this)}>x</button>
              </Modal>
            </div>
            <form >
              <button className='btn' value='submit' onClick={this.removePiece.bind(this)}>Remove above piece</button>
            </form>
          </div>
    )
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
  return bindActionCreators({ fetchPiece, removePiece }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Piece)
