export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_PIECE':
      return [...state, action.payload]
    case 'ADD_PIECE_TO_GALLERY':
      return [...state, action.payload]
    default:
      return state
  }
}
