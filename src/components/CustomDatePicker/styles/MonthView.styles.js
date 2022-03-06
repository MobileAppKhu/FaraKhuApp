import {Dimensions} from 'react-native'
import makeStyles from "../../../helpers/makeStyles";

 const useStyles = makeStyles((palette) => ({
  root: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
    paddingBottom: 15
  },
  list: {justifyContent: 'space-between'},
  cell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayCell: {
    backgroundColor: palette.separator.dark,
    borderRadius: 20,
    marginBottom: 15
  },
  emptyCell: {}
}))
export default useStyles
