export default function(state=[], action) {
  switch (action.type) {
    case 'FETCH_PIECE':
      return [...state, action.payload]
    case 'ADD_PIECE_TO_GALLERY':
      return [...state, action.payload]
    case 'ADD_COMMENTARY':
      const newState = Object.assign({}, state, {
        commentary: [...state.commentary, action.payload.data.commentary]
      })
      return newState
    default:
      return state
  }
}
