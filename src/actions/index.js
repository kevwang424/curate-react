import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')


export const createUser = (user) => {
  let response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
    browserHistory.push("/")
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
  let response = axios.post(`${URL}/login`, loginParams).then((response) => {
    sessionStorage.setItem('jwt', response.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
    browserHistory.push('/user')
  })
  return {
    type: 'CREATE_SESSION',
    payload: 'hey'
  }
}

export const destroySession = () => {
    sessionStorage.removeItem('jwt')
    axios.defaults.headers.common['AUTHORIZATION'] = null
    browserHistory.push('/')
}
