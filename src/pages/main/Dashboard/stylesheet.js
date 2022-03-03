import makeStyles from '../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    backgroundColor: palette.M_3_SYS_SURFACE,
    flex: 1,
    flexDirection: 'column'
  },
  seprator: {
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: palette.M_3_SYS_OUTLINE,
    marginHorizontal: 32
  }
}))
export default useStyles
