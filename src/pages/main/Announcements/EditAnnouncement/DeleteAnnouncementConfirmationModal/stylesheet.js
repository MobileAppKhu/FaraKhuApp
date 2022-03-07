import makeStyles from '../../../../../helpers/makeStyles'
import theme from '../../../../../theme'

const useStyles = makeStyles((palette) => ({
  root: {
    marginHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_ERROR_CONTAINER
  },
  iconContainer: {
    marginTop: 26
  },
  buttonContainer: {
    marginVertical: 16,
    marginHorizontal: 20,
    // width: '100%',
    flexDirection: 'row'
  },
  textContainer: {
    marginTop: 19
  },
  buttonStyleConfirm: {
    width: '48%',
    height: 43,
    marginHorizontal: 4,
    backgroundColor: palette.M_3_SYS_ERROR
  },
  buttonStyleConfirmTextStyle: {
    fontSize: 14,
    fontFamily: theme.Shabnam,
    color: palette.M_3_SYS_ON_ERROR
  },
  buttonStyleCancel: {
    width: '48%',
    height: 43,
    marginHorizontal: 4,
    backgroundColor: palette.M_3_SYS_ERROR_CONTAINER
  },
  buttonStyleCancelTextStyle: {
    fontSize: 14,
    fontFamily: theme.Shabnam,
    color: palette.M_3_SYS_ON_ERROR_CONTAINER
  }
}))
export default useStyles
