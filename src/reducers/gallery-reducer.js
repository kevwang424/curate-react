export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_GALLERY':
      return action.payload
    case 'ADD_PIECE_TO_GALLERY':
      const addState = Object.assign({}, state, {
        piece_ids: [...state.piece_ids, action.payload.data.id]
      })
      return addState
    case 'CREATE_GALLERY':
      return action.payload.gallery
    case 'REMOVE_PIECE_FROM_GALLERY':
      const removeState = Object.assign({}, state, {
        piece_ids: action.payload.piece_ids
      })
      return removeState
    case 'DELETE_GALLERY':
      return action.payload
    case 'EDIT_GALLERY':
      return action.payload.gallery
    default:
      return state
  }
}
