//we are not using state for user

export default function(state=[], action) {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data
    case 'CREATE_SESSION':
      return state
    case 'DESTROY_SESSION':
      return state
    case 'SET_USER':
      return action.payload
    default:
      return state
  }
}
