import React from 'react'
import SearchPiece from './SearchPiece'
import { connect } from 'react-redux'

class SearchResults extends React.Component{

  render(){
    return (
      <div>
        <ul>
          {this.props.apiSearchResults.map( piece => <li key={piece.id} ><SearchPiece details={piece}/></li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    apiSearchResults: state.apiSearchResults
  }
}

export default connect(mapStateToProps)(SearchResults)
