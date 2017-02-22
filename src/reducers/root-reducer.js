import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pieceReducer from './piece-reducer'
import galleryReducer from './gallery-reducer'
import galleryIndexReducer from './gallery-index-reducer'
import apiReducer from './api-reducer'
import modalReducer from './modal-reducer'

const appReducer = combineReducers({
  user: usersReducer,
  piece: pieceReducer,
  gallery: galleryReducer,
  galleryIndex: galleryIndexReducer,
  apiSearchResults: apiReducer,
  isModalOpen: modalReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
