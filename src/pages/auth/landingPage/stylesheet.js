import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
    // backgroundColor: 'red'
  },
  imageContainer: {
    // maxWidth: 129,
    // width: 129,
    // // display: 'flex',
    // // alignItems: 'center',
    // // justifyContent: 'center',
    marginBottom: 40
    // backgroundColor: 'red',
    // // flex: 1,
    // height: 192
  },
  image: {
    width: 129,
    // backgroundColor: 'red',
    height: 192
    // flex: 1
    // height: 'auto'
    // height: 80,
    // alignSelf: 'center'
  },
  textContianer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red'
  }
})
export default styles
