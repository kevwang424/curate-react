export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_USER_GALLERIES':
      return action.payload
    case 'CREATE_GALLERY':
      return action.payload.galleryIndex
    case 'DELETE_GALLERY':
      return action.payload
    case 'EDIT_GALLERY':
      return action.payload.galleryIndex
    default:
      return state
  }
}
