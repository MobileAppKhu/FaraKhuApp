// import {REACT_APP_API_BASE_URL, REACT_APP_API_VERSION} from '@env'

import store from '../redux/store'

// const api_url = REACT_APP_API_BASE_URL + '/' + REACT_APP_API_VERSION

export const request = async (
  endpoint,
  method = 'GET',
  body,
  contentType = 'application/json'
) => {
  const state = store.getState()

  const {token} = state.authReducer
  try {
    const response = await fetch('http://109.162.221.236:5000/api' + endpoint, {
      method,
      headers: {
        Authorization: token || undefined,
        Accept: 'application/json',
        'Content-Type': contentType
      },
      body: JSON.stringify(body)
    })
    return await {
      state: response.status,
      response: await response.json(),
      header: response.headers
    }
  } catch (error) {
    return console.log(error)
  }
}
