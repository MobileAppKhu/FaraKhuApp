import {StyleSheet} from 'react-native'
import palette from '../../../../../../../theme/palette'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: palette.M_3_SYS_PRIMARY_CONTAINER,
    position: 'absolute',
    left: 24,
    bottom: 20,
    elevation: 2
  },
  modalContainer: {
    flex: 1,
    margin: 0
  },
  modalMenu: {
    backgroundColor: '#e4ebf6',
    borderRadius: 20,
    position: 'absolute',
    bottom: 15,
    left: 24,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 5
  }
})

export default styles
