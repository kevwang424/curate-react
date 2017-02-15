export default function(state=[], action) {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data
    case 'FETCH_USER_GALLERIES':
      return action.payload
    default:
      return state
  }
}
