import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createGallery } from '../actions'


class CreateGallery extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const gallery = {
      name: this.refs.name.value,
      description: this.refs.description.value,
    }
    this.props.createGallery(gallery)
  }
  render(){
    return(
      <div>
        <h1>Create a New Gallery</h1>
        <h2>Please name your gallery and add an optional description</h2>
        <div className="flex-container__item">
          <div className="good-form">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="New Gallery Name" ref="name" />
              <textarea placeholder="Write a description (optional)" ref="description" />
              <button type="submit" className="btn">Create Gallery</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    createGallery: state.createGallery
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGallery)
