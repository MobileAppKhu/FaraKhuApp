import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_BACKGROUND
  },
  topPart: {
    backgroundColor: palette.M_3_SYS_SECONDARY,
    alignItems: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
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
  },
  studentCartImageButtonContainer: {
    width: '100%'
  },
  studentCartImageButton: {
    // width: '100%',
    // flex: 1,
    // width: '100%',
    marginHorizontal: 12,
    borderRadius: 7,
    borderColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    marginBottom: 16
  },
  bottomPart: {
    marginHorizontal: 16
  },
  studentNumberContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56
  },
  iconContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 10
  },
  icon: {
    marginLeft: 8
  },
  sepetator: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16
  },
  favorite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  point: {
    marginLeft: 5
    // marginBottom: 5
  }
})
