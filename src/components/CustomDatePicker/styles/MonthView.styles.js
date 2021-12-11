import {Dimensions, StyleSheet} from 'react-native'

import palette from '../../../theme/palette'

export const styles = StyleSheet.create({
  root: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
    paddingBottom: 15
  },
  list: {justifyContent: 'space-between'},
  cell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayCell: {
    backgroundColor: palette.separator.dark,
    borderRadius: 20,
    marginBottom: 15
  },
  emptyCell: {}
})
