import axios from 'axios'

import { LOGIN_USER, REGISTER_USER } from './types'

export const loginUser = (data) => async dispatch => {
  const res = await axios.post('/user/authenticate', data)
  if (res.data.success) sessionStorage.setItem('jwt', res.data.token)
  dispatch({ type: LOGIN_USER, payload: res.data })
}

export const getUser = () => async dispatch => {
  // axios.get('/user/profile',{headers: {"Authorization": token}}).then(res => console.log(res))
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
