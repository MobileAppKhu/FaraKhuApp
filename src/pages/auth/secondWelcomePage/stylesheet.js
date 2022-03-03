import makeStyles from '../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  container: {
    flex: 1
  },
  khuLogo: {
    width: 45,
    height: 70,
    marginTop: 36,
    marginBottom: 10
  },
  image: {
    width: 300,
    height: 290
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 49,
    marginTop: 20,
    marginBottom: 50
  },
  textContent: {
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginHorizontal: 150
  },
  slideIndicatorContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 48
  },
  slideIndicator: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  slideCircle: {
    width: 8,
    height: 8,
    borderRadius: 1000,
    backgroundColor: '#c4c4c4'
  },
  activeSlide: {
    backgroundColor: '#6c5677'
  }
}))
export default useStyles
