import store from '../redux/store'
// import {useToast} from 'react-native-toast-notifications'

export const request = async (
  endpoint,
  method = 'POST',
  body,
  contentType = 'application/json'
) => {
  const state = store.getState()
  // const toast = useToast()

  const {token} = state.authReducer
  try {
    const response = await fetch(
      'https://api.farakhu.markop.ir/api' + endpoint,
      {
        method,
        headers: {
          Authorization: token || undefined,
          Accept: 'application/json',
          'Content-Type': contentType
        },
        body: JSON.stringify(body)
      }
    )
    return await {
      status: response.status,
      response: await response.json(),
      header: response.headers
    }
  } catch (error) {
    console.log(error)
    // toast.show(error)
    return error
  }
}
