import {StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'

const makeStyles = (styles) => () => {
  const theme = useSelector((state) => state.authReducer.theme)
  return StyleSheet.create(styles(theme))
}
export default makeStyles
