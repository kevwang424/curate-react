import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pieceReducer from './piece-reducer'
import galleryReducer from './gallery-reducer'

export default combineReducers({
  users: usersReducer,
  piece: pieceReducer,
  gallery: galleryReducer
})
