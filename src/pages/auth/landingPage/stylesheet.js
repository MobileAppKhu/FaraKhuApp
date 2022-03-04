import makeStyles from '../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  imageContainer: {
    marginBottom: 40
  },
  image: {
    width: 129,
    height: 192
  },
  textContianer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}))
export default useStyles
