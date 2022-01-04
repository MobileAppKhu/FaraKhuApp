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
    backgroundColor: palette.M_3_SYS_SURFACE_VARIANT,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  eventDetails: {
    flexDirection: 'column',
    // width: '100%',
    alignItems: 'flex-end',
    flex: 1
  },
  timeContainer: {
    marginTop: 4
  },
  courseNameContainer: {
    height: 21,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    backgroundColor: palette.M_3_REF_SECONDARY_SECONDARY_40
  },
  eventControler: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1
    // width: '100%'
  }
})
