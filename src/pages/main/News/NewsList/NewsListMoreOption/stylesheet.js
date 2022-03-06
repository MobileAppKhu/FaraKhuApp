import makeStyles from '../../../../../helpers/makeStyles'
export default makeStyles((palette) => ({
  modalContainer: {
    flex: 1,
    margin: 0
  },
  modalMenu: {
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 12,
    position: 'absolute',
    top: 15,
    right: 24,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 5
  },
  menuItem: {
    paddingRight: 16,
    paddingLeft: 24,
    height: 56,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
}))
