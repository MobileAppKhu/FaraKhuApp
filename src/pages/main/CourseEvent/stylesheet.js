import {StyleSheet} from 'react-native'
import theme from '../../../theme'
import palette from '../../../theme/palette'
export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_BACKGROUND
  },
  eventTypeContainer: {
    marginHorizontal: 16
  },
  pickerLabelStyle: {
    fontSize: 18,
    fontFamily: theme.ShabnamBold
  },
  separator: {
    marginTop: 18,
    borderBottomColor: palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16,
    borderBottomWidth: 1,
    marginHorizontal: 8
  },
  dateContainer: {
    flexDirection: 'row-reverse',
    marginTop: 16,
    marginHorizontal: 16
  },
  dateInput: {
    width: 120,
    height: 32,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 7,
    marginLeft: 8
  },
  dateTextInput: {
    padding: 0,
    paddingHorizontal: 5,
    fontFamily: theme.Shabnam,
    fontSize: 13
  },
  placeholderStyle: {
    fontFamily: theme.Shabnam
  },
  hourContainer: {
    marginRight: 15
  },
  hourInput: {
    width: 59,
    height: 29,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 7,
    marginLeft: 8
  },
  containerpicker: {
    flexDirection: 'row'
  },
  descriptionInput: {
    height: 300,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  descriptionInputContainer: {
    marginHorizontal: 16
  },
  buttonContainer: {
    marginTop: 15,
    marginHorizontal: 16,
    marginBottom: 24
  }
})
