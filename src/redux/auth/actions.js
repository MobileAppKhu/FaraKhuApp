export const saveUser = (token) => ({
  type: 'SAVE_USER',
  payload: token
})
export const getUserId = (userId) => ({
  type: 'GET_USER_ID',
  payload: userId
})
