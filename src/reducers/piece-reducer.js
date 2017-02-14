export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_PIECE':
      return action.payload
    default:
      return state
  }
}
