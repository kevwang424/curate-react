import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editGallery } from '../actions'

class EditGallery extends Component {

  handleSubmit(event){
    event.preventDefault()
    const gallery = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      id: this.props.gallery
    }
    this.props.editGallery(gallery)
  }

  render() {
    return(
    <div>
      <h1>Edit your gallery</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" defaultValue={this.props.name} ref="name"/>
        <input type="text" defaultValue={this.props.description} ref="description"/>
        <button className="btn" type="submit">Submit Changes</button>
      </form>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    gallery: state.gallery
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({editGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery)
