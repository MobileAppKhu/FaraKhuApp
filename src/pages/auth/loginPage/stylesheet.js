import makeStyles from '../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1
  },
  imageContainer: {
    marginTop: 12,
    alignItems: 'center',
    marginBottom: 40
  },
  image: {
    height: 59,
    width: 35
    // flex: 1,
    // aspectRatio: 1
    // height: '100%'
  },
  inputsContainer: {
    marginHorizontal: 16,
    marginBottom: 10.5
  },
  emailContainer: {
    marginBottom: 24
  },
  passwordContainer: {
    marginBottom: 15.5
  },
  forgetPasswordContainer: {marginHorizontal: 10, marginBottom: 10},
  buttonContainer: {
    marginHorizontal: 20
  },
  guestLoginButton: {
    marginTop: 16
  }
}))
export default useStyles
