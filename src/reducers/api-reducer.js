export default function(state=[], action) {
  switch (action.type) {
    case 'API_RESULTS':
      return action.payload
    default:
      return state
  }
}
