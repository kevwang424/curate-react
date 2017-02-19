import React, { Component } from 'react'
import { fetchSinglePiece } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class PieceShow extends Component{

  render(){
    const {pieceShow} = this.props
      return(
      <div>
          <ul>
            {/* renders out the info below, do we need the image again? or just the info */}
            {/* {this.props.fetchSinglePiece.map( piece => <li key={piece.id}></li>)} */}
        {/* <img alt={pieceShow.title} src={pieceShow.image_url}/> //do we need?
        <h4>Title: {pieceShow.title}</h4>
        <h4>Artist: {pieceShow.artist_name}</h4>
        <h4>Classification: {pieceShow.classifcation}</h4>
        <h4>Century: {pieceShow.century}</h4>
        <h4>Culture: {pieceShow.culture}</h4>
        <h4>Dimensions: {pieceShow.dimensions}</h4>
        <h4>Label Text: {pieceShow.label_text}</h4>
        <h4>Dated: {pieceShow.dated}</h4>
        <h4>commentary: {pieceShow.commentary}</h4> */}
      </ul>
    </div>
  )
}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSinglePiece }, dispatch)
}

export default connect(null, mapDispatchToProps)(PieceShow)
