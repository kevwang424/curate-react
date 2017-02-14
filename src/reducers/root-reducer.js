import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pieceReducer from './piece-reducer'

export default combineReducers({
  users: usersReducer,
  piece: pieceReducer
})
