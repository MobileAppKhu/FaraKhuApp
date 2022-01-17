import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER
  },
  iconContainer: {
    marginTop: 26
  },
  messageContainer: {
    marginTop: 19
  },
  buttonContainer: {
    marginVertical: 16,
    paddingHorizontal: 24,
    width: '100%'
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonTextStyle: {
    color: palette.M_3_SYS_ON_PRIMARY_CONTAINER
  }
})
export default styles
