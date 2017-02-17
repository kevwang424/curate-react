import React, { Component } from 'react'
import Modal from 'react-modal'

class SearchPiece extends Component {

  constructor(){
    super()
    this.state = {modalIsOpen: false}
  }

  addToGallery(event){
    event.preventDefault()
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

    const { details } = this.props

    return(
      <div >
        <form>
          <h1>Title: {details.title}</h1>
          <Modal isOpen={this.state.modalIsOpen}>
            <img src={details.primaryimageurl}
              onClick={this.closeModal.bind(this)}/></Modal>
          <img src={details.primaryimageurl} onClick={this.handleClick.bind(this)}/>
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
