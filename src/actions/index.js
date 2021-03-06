import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = "https://curate-it-api.herokuapp.com/api/v1"  
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')


export const createUser = (user) => {
  let response = axios.post(URL + '/signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
    browserHistory.push("/user")
  }).catch((errors) => {
    browserHistory.push('/signup')
    alert(errors.response.data.errors[0].detail)})

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const fetchPiece = (id) => {
  let response = axios.get(`${URL}/pieces/${id}`).then(response => response.data)
  return {
    type: 'FETCH_PIECE',
    payload: response
  }
}

export const fetchGallery = (id) => {
  let response = axios.get(`${URL}/galleries/${id}`).then(response => response.data)
  return {
    type: 'FETCH_GALLERY',
    payload: response
  }
}

export const fetchUserGalleries = () => {
  let response = axios.get(`${URL}/galleries`).then(response => response.data)
  return {
    type: 'FETCH_USER_GALLERIES',
    payload: response
  }
}

export const createSession = (loginParams) => {
  axios.post(`${URL}/login`, loginParams).then((response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
      browserHistory.push('/user')
  }).catch((errors) => {
    browserHistory.push('/login')
    alert(errors.response.data.errors[0].detail)
  })
  return {
    type: 'CREATE_SESSION'
  }
}

export const destroySession = () => {
  sessionStorage.removeItem('jwt')
  axios.defaults.headers.common['AUTHORIZATION'] = null
  browserHistory.push('/')
  return {
    type: 'DESTROY_SESSION'
  }
}

export const searchAPI =(params)=> {
  let response = axios.get(`http://api.harvardartmuseums.org/object?apikey=48d94c00-f18a-11e6-89ba-839d228fa55c&size=100&hasimage=1&q=${params.criteria.search}`).then(result => result.data.records)
  return {
    type: 'API_RESULTS',
    payload: response
  }
}

export const createGallery = (params) => {
  let response = axios.post(URL + '/galleries', params).then(response => response.data)
  browserHistory.push('/user')
  return {
    type: 'CREATE_GALLERY',
    payload: response
  }
}

export const editGallery = (params) => {
  let response = axios.patch(`${URL}/galleries/${params.id}`, params).then(response => response.data)
  return {
    type: 'EDIT_GALLERY',
    payload: response
  }
}

export const addPieceToDb = (newPiece) => {
  let response = axios.post(`${URL}/pieces`, newPiece)
  return {
    type: 'ADD_PIECE_TO_GALLERY',
    payload: response
  }
}

export const removePiece = (piece, gallery) => {
  let response = axios.post(`${URL}/remove`, {piece: piece, gallery_id: gallery}).then(response => response.data)
  return {
    type: "REMOVE_PIECE_FROM_GALLERY",
    payload: response
  }
}

export const deleteGallery = (id) => {
  let response = axios.delete(`${URL}/galleries/${id}`).then(response => response.data)
  return {
    type: 'DELETE_GALLERY',
    payload: response
  }
}

export const setUser = () => {
  let response = axios.get(`${URL}/users`).then(response => response.data)
  return {
    type: 'SET_USER',
    payload: response
  }
}

export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
    payload: true
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
    payload: false
  }
}
