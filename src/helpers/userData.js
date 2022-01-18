import {AsyncStorage} from 'react-native'
import {useSelector} from 'react-redux'
// const emptyUser = {
//   EntityCode: '',
//   EntityId: '',
//   EntityName: '',
//   Logo: '',
//   Name: '',
//   Role: '',
//   access_token: '',
//   expires_at: '',
//   token_type: ''
// }

export const getUserFromStorage = async () => {
  const token = await AsyncStorage.getItem('token')
  return token
}

export const saveUserIntoStorage = async (token) => {
  await AsyncStorage.setItem('token', token)
}

export const getTokenFromStorage = () => {
  const data = useSelector((state) => state.authReducer)
  return data.token
}
