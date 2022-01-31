import {StyleSheet} from 'react-native'
import palette from '../../../../../../theme/palette'

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 3,
    marginBottom: 10,
  },
  topPart: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_PRIMARY,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 3,
    marginBottom: 8
  },
  eventContainer: {
    marginBottom: 16
  }
})
export default styles
