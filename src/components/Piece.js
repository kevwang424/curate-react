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

    if (piece){
    return(
      <div>
      <h1>{piece.title}</h1>
      <img src={piece.image_url} alt={piece.title} />
    </div>
    )
  } else {
    return <div>Loading</div>
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
  return bindActionCreators({fetchPiece}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Piece)
