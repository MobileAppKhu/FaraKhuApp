import makeStyles from '../../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 7,
    backgroundColor: palette.M_3_SYS_SURFACE
  },
  optionsConainers: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8
  },
  moreIconContainer: {
    marginLeft: 16
  },
  textContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIconContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  createAccountButtonContainer: {
    position: 'absolute',
    borderRadius: 16
  },
  modalContainer: {
    flex: 1,
    margin: 0
  },
  modalMenu: {
    backgroundColor: '#e4ebf6',
    borderRadius: 20,
    position: 'absolute',
    top: 15,
    right: 24,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 5
  }
}))
export default useStyles
