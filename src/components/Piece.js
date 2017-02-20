import React, { Component } from 'react'
import { fetchPiece, removePiece } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import loading from '../assets/images/koolaid.png'


class Piece extends Component{

  componentDidMount(){
      this.props.fetchPiece(this.props.id)
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
        <div className="gallery__frame">
          <h1>Title: {piece.title}</h1>
          <img src={piece.image_url} alt={piece.title}/>
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
