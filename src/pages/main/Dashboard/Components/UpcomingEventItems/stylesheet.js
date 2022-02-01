import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

export default StyleSheet.create({
  root: {
    marginHorizontal: 8,
    marginBottom: 8,
    paddingVertical: 4,
    borderRadius: 12,
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
    alignItems: 'flex-end',
    flex: 1.5
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
    backgroundColor: palette.M_3_REF_SECONDARY_SECONDARY_40,
    marginLeft: 16
  },
  courseNameContainerOnShowCheckBox: {
    marginLeft: 0
  },
  eventControler: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  },
  eventControlerOnShowCheckBox: {
    justifyContent: 'space-between'
  }
})
