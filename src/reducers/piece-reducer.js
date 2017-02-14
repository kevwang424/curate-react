export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_PIECE':
      return [...state, action.payload]
    default:
      return state
  }
}
