import React, { Component } from 'react'
import { fetchPiece } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Piece extends Component{

  componentDidMount(){
      this.props.fetchPiece(this.props.id)
  }

  render(){
    const {piece} = this.props
    return(
      <div>
      <h1>{piece.title}</h1>
      <img src={piece.image_url} alt={piece.title} />
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    piece: state.piece
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPiece}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Piece)
