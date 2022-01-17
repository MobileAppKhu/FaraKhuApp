import {StyleSheet} from 'react-native'
import palette from './../../../../theme/palette'

const styles = StyleSheet.create({
  root: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 7,
    backgroundColor: palette.M_3_SYS_SURFACE
  },
  optionsConainers: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8
  },
  notificationIconContainer: {
    marginHorizontal: 16
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 48,
    width: 35
  },
  menuIconContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end'
  }
})
export default styles
