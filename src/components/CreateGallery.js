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
    this.refs.this_form.reset()
  }

  render(){
    return(
      <div>
          <div className="form__create">
            <form onSubmit={this.handleSubmit} ref="this_form">
              <input type="text" placeholder="New Gallery Name" ref="name" />
              <input type="text" placeholder="Write a description (optional)" ref="description" />
              <button type="submit" className="btn">New Gallery</button>
            </form>
          </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createGallery}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateGallery)
