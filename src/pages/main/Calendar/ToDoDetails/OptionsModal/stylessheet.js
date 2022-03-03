import makeStyles from '../../../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  optionsModalContainer: {
    flex: 1,
    margin: 0
  },
  optionsModal: {
    backgroundColor: '#e4ebf6',
    borderRadius: 20,
    position: 'absolute',
    top: 20,
    right: 30,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 10
  },
  optionsModalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 25
  },
  optionsModalItemText: {
    marginRight: 12
  }
}))
export default useStyles
