import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
  root: {marginBottom: 16, elevation: 9},
  image: {
    // flex: 1,
    width: Dimensions.get('window').width - 32,
    borderRadius: 16

    // width: '100%'
  }
})
