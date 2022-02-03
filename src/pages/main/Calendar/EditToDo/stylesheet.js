import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_ON_PRIMARY
  },
  container: {
    paddingHorizontal: 20
  },
  textInputContainer: {},
  textInput: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  dateContainer: {
    flexDirection: 'row-reverse',
    marginTop: 32
  },
  dateInput: {
    width: 136,
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
    paddingHorizontal: 5
  },
  hourContainer: {
    marginRight: 10
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
  descInputContainer: {
    marginBottom: 24,
    flex: 1
  },
  descInput: {
    height: 300,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  buttonContainer: {
    marginVertical: 20
  },
  button: {
    marginBottom: 16
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'Shabnam'
  }
})
export default styles
