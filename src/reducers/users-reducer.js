export default function(state=[], action) {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data
    case 'CREATE_SESSION':
      return [...state, action.payload]
    default:
      return state
  }
}
