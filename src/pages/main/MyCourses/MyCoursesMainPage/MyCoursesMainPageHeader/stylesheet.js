import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

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
  moreIconContainer: {
    marginLeft: 16
  },
  textContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIconContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  createAccountButtonContainer: {
    position: 'absolute',
    borderRadius: 16
  },
  modal: {
    paddingVertical: 16,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.M_3_READ_ONLY_SURFACE_1,
    position: 'absolute',
    paddingHorizontal: 24,
    top: 0,
    right: 0,
    elevation: 10,
    borderRadius: 16
  }
})
export default styles
