import axios from 'axios'

import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  AUTHENTICATE_USER
} from './types'

export const loginUser = (data) => async dispatch => {
  const res = await axios.post('/user/authenticate', data)
  if (res.data.success) {
    sessionStorage.setItem('jwt', res.data.token)
    sessionStorage.setItem('user', res.data.user.id)
  }
  dispatch({ type: LOGIN_USER, payload: res.data })
}

export const logoutUser = () => async dispatch => {
  const res = await axios.get('/user/logout')
  if (!res.data.success) {
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('user')
  }
  dispatch({ type: LOGOUT_USER, payload: res.data })
}

export const getUser = (token) => async dispatch => {
  const res = await axios.get('/user/profile', {
    headers: { "Authorization": token }
  })
  dispatch({ type: AUTHENTICATE_USER, payload: res.data})
}

export const registerUser = (data) => async dispatch => {
  const checkEmailRes = await axios.post('/user/checkemail', data)
  if (checkEmailRes.data.status.email.available) {
    const res = await axios.post('/user/register', data)
    dispatch({ type: REGISTER_USER, payload: res.data })
  } else {
    dispatch({ type: REGISTER_USER, payload: checkEmailRes.data.status.email })
  }
}

export const updateUser = (token, data) => async dispatch => {
  const res = await axios.post('/user/update', data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
  console.log(res);
}
