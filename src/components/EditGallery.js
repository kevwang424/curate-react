import React from 'react'
import Search from './Search'
import SearchResults from './SearchResults'
import { connect } from 'react-redux'

function EditGallery() {
  return(
    <div>
      <h1>Search for Art for your new Gallery</h1>
      <Search />
      <SearchResults />
    </div>
  )
}

export default connect()(EditGallery)
