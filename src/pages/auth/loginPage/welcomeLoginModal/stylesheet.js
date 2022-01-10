import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 24,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER
  },
  imageContainer: {
    marginTop: 32.5,
    width: 48,
    height: 48
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  messageContainer: {
    marginTop: 24.5
  },
  buttonContainer: {
    marginVertical: 16,
    paddingHorizontal: 24,
    width: '100%'
  }
})
export default styles
