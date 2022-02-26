// import {getUserFromStorage} from '../../helpers/userData'
import lightPalette from '../../theme/palette'
const INIT_STATE = {
  user: '',
  role: '',
  userId: '',
  theme: lightPalette,
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
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.payload
      }
    }
    case 'LOG_OUT':
      return {
        user: '',
        role: '',
        userId: '',
        theme: false,
        token: undefined
      }
    default:
      return state
  }
}
