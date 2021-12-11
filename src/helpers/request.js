import {REACT_APP_API_BASE_URL, REACT_APP_API_VERSION} from '@env'
import {I18nManager} from 'react-native'

import store from '../redux/store'

const api_url = REACT_APP_API_BASE_URL + '/' + REACT_APP_API_VERSION

export const request = (
  endpoint,
  method = 'GET',
  body,
  contentType = 'application/json'
) => {
  const state = store.getState()

  const {token} = state.auth

  console.log(api_url + endpoint)

  return fetch('https://backend.gandom-app.com/v1' + endpoint, {
    method,
    headers: {
      Authorization: token || undefined,
      localization: I18nManager.isRTL ? 'fa' : 'en',
      Accept: 'application/json',
      'Content-Type': contentType
    },
    body: JSON.stringify(body)
  }).then((response) => Promise.all([response.status, response.json()]))
}

// rawRequest is spacially usefull for requests with content types other than applicaion/json
export const rawRequest = (endpoint, method, body) => {
  const state = store.getState()

  const {token} = state.auth

  return fetch(api_url + endpoint, {
    method,
    headers: {
      Authorization: token || undefined,
      localization: 'fa'
      // Accept: 'application/json',
    },
    body
  }).then((response) => Promise.all([response.status, response.json()]))
}
