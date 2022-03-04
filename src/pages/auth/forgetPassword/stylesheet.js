import makeStyles from '../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1
  },
  textConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 25,
    marginTop: 50
  },
  partContainer: {
    marginHorizontal: 16,
    marginVertical: 40
  },
  inputContainer: {
    marginBottom: 50
  },
  main: {
    flex: 1
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'stretch'
  }
}))
export default useStyles
