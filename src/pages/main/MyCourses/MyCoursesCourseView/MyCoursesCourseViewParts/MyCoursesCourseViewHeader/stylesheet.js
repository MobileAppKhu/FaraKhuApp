import makeStyles from '../../../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  root: {
    width: '100%',
    height: 232,
    justifyContent: 'space-between'
  },
  moreOption: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'space-between'
  },
  information: {
    height: 126,
    marginBottom: 8,
    marginHorizontal: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_PRIMARY_CONTAINER,
    backgroundColor: palette.M_3_SYS_SECONDARY,
    opacity: 0.75,
    justifyContent: 'space-between'
  },
  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  teacherImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 8
  }
}))
export default useStyles
