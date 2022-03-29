import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  screen: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_ON_PRIMARY
  },
  container: {
    paddingHorizontal: 20
  },
  header: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_PRIMARY
  },
  pageTitle: {
    color: palette.M_3_SYS_ON_PRIMARY,
    marginHorizontal: 70
  },
  closeButton: {
    position: 'absolute',
    left: 25
  },
  imageInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  studentsList: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  stuNumberInput: {
    marginBottom: 10
  },
  studentName: {
    textDecorationLine: 'underline',
    fontSize: 14
  }
}))
export default useStyles
