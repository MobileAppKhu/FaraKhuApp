import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  screen: {
    backgroundColor: palette.M_3_SYS_SURFACE,
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 16,
    backgroundColor: palette.M_3_SYS_SURFACE
  },
  searchBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 32,
    paddingLeft: 16,
    height: 48,
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.M_3_SYS_LIGHT_OUTLINE
  },
  searchIcon: {flex: 1},
  textInput: {
    flex: 8,
    textAlign: 'right'
  },
  searchOutput: {
    flex: 1,
    marginTop: 30
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
  },
  addBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16
  },
  addBtnIcon: {
    marginLeft: 12
  },
  addBtnText: {
    color: palette.M_3_SYS_ON_PRIMARY_CONTAINER
  }
}))

export default useStyles
