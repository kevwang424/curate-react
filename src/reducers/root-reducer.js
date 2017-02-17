import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pieceReducer from './piece-reducer'
import galleryReducer from './gallery-reducer'
import galleryIndexReducer from './gallery-index-reducer'
import apiReducer from './api-reducer'

export default combineReducers({
  user: usersReducer,
  piece: pieceReducer,
  gallery: galleryReducer,
  galleryIndex: galleryIndexReducer,
  apiSearchResults: apiReducer
})
