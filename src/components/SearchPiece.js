import React, { Component } from 'react'

class SearchPiece extends Component {

  addToGallery(event){
    event.preventDefault()
  }


  render(){

    const { details } = this.props

    return(
      <div>
        <form>
          <h1>Title: {details.title}</h1>
          <img src={details.primaryimageurl}/>
          <h4> Artist: {details.people[0].name ? details.people[0].name : "Artist Not Listed"} </h4>
          <h4>Century: {details.century}</h4>
          <h4>Classification: {details.classification}</h4>
          <h4> Dimensions: {details.dimensions ? details.dimensions : "Dimensions Not Found"}</h4>
          <input type="button" value="Add To Gallery" onClick={this.addToGallery.bind(this)}/>
        </form>
      </div>
    )
  }

}

export default SearchPiece
