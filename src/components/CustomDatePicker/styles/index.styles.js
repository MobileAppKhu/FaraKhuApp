import {Dimensions} from 'react-native'

import makeStyles from "../../../helpers/makeStyles";

const useStyles = makeStyles((palette) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center'
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: palette.separator.dark,
    marginTop: 20,
    marginBottom: 16
  },
  monthHeader: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 21
  },
  confirmButton: {
    width: Dimensions.get('window').width - 60,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: palette.mainButton.background
  },
  confirmButtonText: {
    color: palette.white
  }
}))
export default useStyles