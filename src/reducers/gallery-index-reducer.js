export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_USER_GALLERIES':
      return action.payload
    case 'CREATE_GALLERY':
      debugger
      return action.payload.galleryIndex
    default:
      return state
  }
}
