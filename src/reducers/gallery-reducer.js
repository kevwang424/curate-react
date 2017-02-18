export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_GALLERY':
      return action.payload
    case 'ADD_PIECE_TO_GALLERY':
      const newState = Object.assign({}, state, {
        piece_ids: [...state.piece_ids, action.payload.data.id]
      })
      return newState
    case 'CREATE_GALLERY':
      return action.payload.gallery
    default:
      return state
  }
}
