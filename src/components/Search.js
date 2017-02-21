import React, { Component } from 'react'
import { searchAPI } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Search extends Component {

  constructor(){
    super()
    this.state ={
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    let newState = Object.assign({}, this.state)
    newState[event.target.name] = event.target.value
    this.setState(newState)
    let params = {
      criteria: newState
    }
    this.props.searchAPI(params)
  }

  handleSubmit(event){
    event.preventDefault()
    let params = {
      page: this.refs.per_page.value,
      criteria: this.state.search
    }
    this.props.searchAPI(params)
    this.refs.this_form.reset()
  }

  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit} ref="this_form">
          <select ref="per_page">
            <option value="" disabled selected>Results per page</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <input type="text" value={this.state.search} onChange={this.handleChange} name="search" placeholder="Search for Art"/>
          <button type="submit" className="btn" onClick={this.handleSubmit}>Search</button>
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
