import {StyleSheet} from 'react-native'
import theme from '../../../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  courseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 16,
    marginTop: 30,
    width: '100%',
    borderRadius: 8
  },
  buttonStyle: {
    width: 144,
    height: 46
  },
  buttonTextStyle: {
    fontSize: 14,
    fontFamily: theme.Shabnam
  }
})
export default styles
