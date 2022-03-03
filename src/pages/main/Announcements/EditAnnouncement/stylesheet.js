import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    backgroundColor: palette.M_3_SYS_SURFACE,

    flex: 1
  },
  optionsContainer: {
    marginHorizontal: 16
  },
  button: {
    height: 43,
    marginVertical: 24
  }
}))

export default useStyles
