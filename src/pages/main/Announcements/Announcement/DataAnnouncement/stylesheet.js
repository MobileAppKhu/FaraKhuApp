import makeStyles from '../../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    marginHorizontal: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    // height: 112,
    borderRadius: 12,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardStyle: {
    alignItems: 'flex-end'

    // marginHorizontal: 16,
  },
  imgTeachStyle: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 8
  },
  imageStyle: {
    width: 24,
    height: 24,
    // marginTop: 24,
    // marginBottom: 8,
    borderRadius: 12
  },
  teacherName: {
    // marginTop: 11,
    marginRight: 8
  },
  iconStyle: {
    marginRight: 32
  },
  text: {
    width: 224,
    height: 42,
    marginRight: 40,
    letterSpacing: 0,
    textAlign: 'right'
  },
  textIcon: {
    // flexDirection: 'row'
    maxWidth: 200
  },
  dateStyle: {
    marginTop: 2,
    marginBottom: 10
  }
}))
export default useStyles
