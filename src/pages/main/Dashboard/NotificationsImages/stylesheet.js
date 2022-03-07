import {Dimensions} from 'react-native'
import makeStyles from '../../../../helpers/makeStyles'
export default makeStyles(() => ({
  root: {marginBottom: 16, elevation: 9},
  image: {
    width: Dimensions.get('window').width - 32,
    borderRadius: 16
  }
}))
