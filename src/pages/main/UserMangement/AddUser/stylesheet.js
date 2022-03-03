import theme from '../../../../theme'
import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  container: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_ON_PRIMARY
  },
  pickerLabelStyle: {
    fontSize: 18,
    fontFamily: theme.ShabnamBold
  },
  labelStyle: {
    fontSize: 14
  },
  helperText: {
    fontSize: 14,
    marginTop: 5
  },
  buttonContainer: {
    marginBottom: 16,
    borderRadius: 7
  }
}))
export default useStyles
