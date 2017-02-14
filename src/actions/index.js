import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:3000/api/v1/'

export const createUser = (user) => {
  let response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
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

export const fetchGallery = () => {
  let response = axios.get(`${URL}/galleries/3`).then(response => response.data)
  return {
    type: 'FETCH_GALLERY',
    payload: response
  }
}
