import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')


export const createUser = (user) => {
  let response = axios.post(URL + '/signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
    browserHistory.push("/user")

    return userData
  })

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

export const searchAPI = (perPage) => {
  let response = axios.get(`http://api.harvardartmuseums.org/object?apikey=48d94c00-f18a-11e6-89ba-839d228fa55c&size=${perPage}&hasimage=1`).then(result => result.data.records)
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

export const addPieceToDb = (newPiece) => {
  let response = axios.post(`${URL}/pieces`, newPiece)
  return {
    type: 'ADD_PIECE_TO_GALLERY',
    payload: response
  }
}

export const addCommentary = (commentary) => {
  let response = axios.post(`${URL}/pieces`, commentary)
  return {
    type: 'ADD_COMMENTARY',
    payload: response
  }
}
