import React, { Component } from 'react'
import { searchAPI } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

class Search extends Component {

  constructor(){
    super()
    this.state ={
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let newState = Object.assign({}, this.state)
    newState[event.target.name] = event.target.value
    this.setState(newState)
    let params = {
      criteria: newState
    }
    // this.props.searchAPI(params)

    const de = _.debounce((params) => {
      this.props.searchAPI(params)
    }, 250)

    de(params)
  }

  render(){
    return(
      <div className="form">
        <form ref="this_form">
          <input type="text" value={this.state.search} onChange={this.handleChange} name="search" placeholder="Search for Art"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    apiSearchResults: state.apiSearchResults
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({searchAPI}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
