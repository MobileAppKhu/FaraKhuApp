import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  screen: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_ON_PRIMARY
  },
  container: {
    flexGrow: 1,
    paddingVertical: 10
  },
  addBtn: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginRight: 12
  },
  addBtnIcon: {
    marginTop: 16,
    marginLeft: 12
  },
  addBtnText: {
    marginTop: 16,
    color: palette.M_3_SYS_ON_PRIMARY_CONTAINER
  },
  addBtnContainer: {
    position: 'absolute',
    bottom: 16,
    left: 24,
    height: 56,
    width: 129,
    backgroundColor: palette.M_3_SYS_PRIMARY_CONTAINER,
    borderRadius: 16,
    elevation: 3
  }
}))
export default useStyles
