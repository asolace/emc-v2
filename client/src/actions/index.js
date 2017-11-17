import axios from 'axios'

import { FETCH_USER, REGISTER_USER } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/user/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
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
