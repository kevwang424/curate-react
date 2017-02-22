export default function(state=false, action) {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return action.payload
    case 'OPEN_MODAL':
      return action.payload
    default:
      return state
  }
}
