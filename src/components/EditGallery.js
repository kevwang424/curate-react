import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editGallery, closeModal } from '../actions'

class EditGallery extends Component {

  handleSubmit(event){
    event.preventDefault()
    const gallery = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      id: this.props.gallery
    }
    this.props.editGallery(gallery)
    this.props.closeModal()
  }

  render() {
    return(
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Gallery Name</label>
        <input type="text" defaultValue={this.props.name} ref="name"/>
        <label>Gallery Description</label>
        <input type="text" defaultValue={this.props.description} ref="description"/>
        <button className="btn" type="submit">Submit Changes</button>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({editGallery, closeModal}, dispatch)
}

export default connect(null, mapDispatchToProps)(EditGallery)
