import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topappbar: {
    width: '100%',
    height: 64,
    backgroundColor: '#1660a5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  announcementcard: {
    width: 312,
    height: 112,
    borderRadius: 12
  },
  bottombar: {
    width: 146,
    height: 56,
    borderRadius: 16
  },
  searchicon: {
    width: 24,
    height: 24
  },
  typorgraphy1: {
    textAlign: 'center',
    marginTop: 18
  },
  menuIconContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end'
  },
  backicon: {
    width: 24,
    height: 24
  },
  addiconStyle: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginRight: 12
  },
  iconStyle: {
    marginTop: 16,
    marginLeft: 12
  },
  textStyle: {
    marginTop: 16
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 16,
    left: 24,
    height: 56,
    width: 146,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 12,
    elevation: 10
  }
})
export default styles
