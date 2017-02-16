import { browserHistory } from 'react-router'

export const authenticate = () => {
  if(!sessionStorage.getItem('jwt')){
    browserHistory.push('/login')
  }
}

export const isLoggedIn = () => {
  if(!!sessionStorage.getItem('jwt')){
    return true
  } else {
    return false
  }
}
