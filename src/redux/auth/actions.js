export const saveUser = (token) => ({
  type: 'SAVE_USER',
  payload: token
})
export const getUserId = (userId) => ({
  type: 'GET_USER_ID',
  payload: userId
})
export const changeTheme = (theme) => ({
  type: 'CHANGE_THEME',
  payload: theme
})
export const logOut = () => ({
  type: 'LOG_OUT',
  payload: undefined
})
