import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 8,
    marginBottom: 16,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    marginRight: 16,
    width: 118,
    height: 118,
    borderRadius: 12,
    backgroundColor: 'red'
  }
})
export default styles
