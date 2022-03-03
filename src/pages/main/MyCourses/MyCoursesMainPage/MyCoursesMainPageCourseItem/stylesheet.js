import makeStyles from '../../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    elevation: 10,
    marginTop: 16,
    borderRadius: 12
  },
  imageBackground: {
    width: 144,
    height: 144,
    borderRadius: 12,
    justifyContent: 'flex-end'
  },
  contianer: {
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: palette.M_3_SYS_SECONDARY,
    opacity: 0.75,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 8
  },
  titleContianer: {
    marginTop: 4,
    marginBottom: 2
  },
  courseNumberContainer: {
    marginBottom: 2,
    alignItems: 'flex-start'
  },
  teacherNameContainer: {
    marginBottom: 4,
    alignItems: 'flex-start'
  }
}))
export default useStyles
