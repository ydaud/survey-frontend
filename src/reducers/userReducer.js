import userService from '../services/userService'
import loginService from '../services/loginService'

export const createUser = (user) => {
  return async dispatch => {
    const response = await userService.createUser(user)
    dispatch({
      type: 'CREATE_USER',
      data: response
    })
  }
}

export const checkCache = () => {
  return dispatch => {
    if (window.localStorage.getItem('user') !== null) {
      dispatch({
        type: 'SIGN_IN',
        data: JSON.parse(window.localStorage.getItem('user')),
      })
    }
  }
}

export const signIn = (user) => {
  return async dispatch => {
    const response = await loginService.login(user)
    dispatch({
      type: 'SIGN_IN',
      data: response,
    })
  }
}

export const signOut = () => {
  return dispatch => {
    window.localStorage.removeItem('user')
    dispatch({
      type: 'SIGN_OUT',
    })
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return null
    case 'SIGN_IN':
      window.localStorage.setItem('user', JSON.stringify(action.data))
      return action.data
    case 'SIGN_OUT':
      return null
    default:
      return state
  }
}

export default reducer
