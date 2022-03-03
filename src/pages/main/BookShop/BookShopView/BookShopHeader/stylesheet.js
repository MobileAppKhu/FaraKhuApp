import makeStyles from '../../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  container: {
    backgroundColor: palette.M_3_SYS_SURFACE,
    elevation: 4,
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftIcon: {
    marginLeft: 24,
    marginRight: 15
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: 16
  },
  search: {
    marginRight: 16
  }
}))
export default useStyles
