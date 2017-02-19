export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_PIECE':
      return [...state, action.payload]
    case 'FETCH_SINGLE_PIECE':
      return action.payload //do not need to change state, just need to fetch the info -> pieceshow comp
    case 'ADD_PIECE_TO_GALLERY':
      return [...state, action.payload]
    default:
      return state
  }
}
