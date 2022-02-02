// import {getUserFromStorage} from '../../helpers/userData'

const INIT_STATE = {
  user: '',
  role: '',
  userId: '',
  token: undefined
}

export default function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        token: action.payload
      }
    case 'GET_USER_ID': {
      return {
        ...state,
        userId: action.payload
      }
    }
    default:
      return state
  }
}
