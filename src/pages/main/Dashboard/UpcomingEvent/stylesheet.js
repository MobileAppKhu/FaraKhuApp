import makeStyles from '../../../../helpers/makeStyles'

const styles = makeStyles((palette) => ({
  root: {
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: palette.M_3_SYS_SURFACE,
    elevation: 3
  },
  topPart: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_PRIMARY,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 3,
    marginBottom: 8
  },
  eventContainer: {
    // marginBottom: 16
  }
}))
export default styles
