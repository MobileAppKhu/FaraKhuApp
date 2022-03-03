import makeStyles from '../../../../helpers/makeStyles'
const useStyles = makeStyles((palette) => ({
  container: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_BACKGROUND
  },
  imageContainer: {
    width: '100%',
    height: 250
  },
  titleContainer: {
    marginHorizontal: 16,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 16
  },
  title: {
    width: '100%'
  },
  adType: {
    width: 50,
    height: 21,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY,
    marginTop: 8
  },
  price: {
    marginHorizontal: 16,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },

  optionsIcon: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'space-between'
  },
  teacherImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 8
  }
}))
export default useStyles
