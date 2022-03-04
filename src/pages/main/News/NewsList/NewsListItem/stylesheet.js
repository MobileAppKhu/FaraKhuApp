import makeStyles from '../../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 8,
    marginBottom: 16,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    marginRight: 16,
    width: 118,
    height: 118,
    borderRadius: 12,
    backgroundColor: 'red'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))
export default useStyles
