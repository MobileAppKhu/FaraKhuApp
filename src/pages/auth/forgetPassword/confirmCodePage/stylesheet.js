import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1
  },
  buttonContainer: {
    marginTop: 50,
    marginHorizontal: 16.5
  },
  textContainer: {
    marginTop: 20,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    flexWrap: 'wrap',
    flexDirection: 'row-reverse'
  },

  emailContainer: {
    flexDirection: 'row'
  },
  email: {
    marginHorizontal: 3
  }
}))
export default useStyles
