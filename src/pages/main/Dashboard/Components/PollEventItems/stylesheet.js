import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

export default StyleSheet.create({
  root: {
    marginHorizontal: 8,
    marginBottom: 8,
    paddingVertical: 4,
    borderRadius: 12,
    // paddingHorizontal: 20,
    paddingRight: 32,
    paddingLeft: 20,
    backgroundColor: palette.M_3_SYS_TERTIARY_CONTAINER,
    flex: 1,
    flexDirection: 'column'
  },
  eventDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1
  },

  eventControler: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  }
})
