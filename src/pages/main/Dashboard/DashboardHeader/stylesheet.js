import {StyleSheet} from 'react-native'
import store from '../../../../redux/store'

const makeStyles = (styles) => () =>
  StyleSheet.create(styles(store.getState().authReducer.theme))

export const styles = makeStyles((theme) => ({
  root: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 7,
    backgroundColor: theme?.M_3_SYS_SURFACE
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
}))
