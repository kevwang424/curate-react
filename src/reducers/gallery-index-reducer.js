export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_USER_GALLERIES':
      return action.payload
    default:
      return state
  }
}
