import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

export default StyleSheet.create({
  root: {
    flex: 1
  },
  topPart: {
    backgroundColor: palette.M_3_SYS_SECONDARY,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 18
  },
  imageContainer: {
    position: 'relative',
    height: 104,
    width: 104,
    marginBottom: 16
  },
  image: {
    height: 104,
    width: 104,
    borderRadius: 52
    // resizeMode: 'stretch'
  },
  editImageIcon: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 13,
    position: 'absolute',
    bottom: 0,
    left: 0,
    elevation: 7
  },
  name: {
    marginBottom: 8
  },
  rule: {
    marginBottom: 16
  }
})
