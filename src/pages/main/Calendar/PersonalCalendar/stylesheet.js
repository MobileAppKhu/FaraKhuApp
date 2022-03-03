import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    flex: 1
  },
  datePicker: {
    margin: 16
  },
  eventContainer: {
    marginHorizontal: 16
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 16,
    left: 24,
    height: 56,
    width: 146,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 12,
    elevation: 5
  },
  textStyle: {
    marginTop: 16
  },
  addiconStyle: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginRight: 12
  },
  iconStyle: {
    marginTop: 16,
    marginLeft: 12
  }
}))
export default useStyles
