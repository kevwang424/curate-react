export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_GALLERY':
      return action.payload
    default:
      return state
  }
}
