import {StyleSheet} from 'react-native'
import theme from '../../../../theme'
import palette from '../../../../theme/palette'

export default StyleSheet.create({
  root: {flex: 1},
  imageInput: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  seperator: {
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16
  },
  pickerLabelStyle: {
    fontSize: 18,
    fontFamily: theme.ShabnamBold
  },
  titleContianer: {
    marginHorizontal: 16,
    marginBottom: 16
  },
  descriptionContainer: {
    marginHorizontal: 16,
    marginBottom: 40
  },
  descriptionInput: {
    height: 223,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  submitButtonContainer: {
    marginHorizontal: 16,
    marginBottom: 16
  }
})
