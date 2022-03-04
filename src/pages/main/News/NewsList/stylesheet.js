import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    flex: 1
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 16,
    left: 24,
    height: 56,
    width: 124,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 12,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  itemsContainer: {
    marginTop: 16,

    marginBottom: 66
  }
}))
export default useStyles
