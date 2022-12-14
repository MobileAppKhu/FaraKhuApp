import makeStyles from '../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  container: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_BACKGROUND
  },
  root: {
    width: '100%',
    height: 232,
    justifyContent: 'space-between'
    // alignItems: 'flex-end'
  },
  moreOption: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  information: {
    minHeight: 66,
    marginBottom: 8,
    marginHorizontal: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_PRIMARY_CONTAINER,
    backgroundColor: palette.M_3_SYS_SECONDARY,
    opacity: 0.75,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  AnnouncementDetails: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: palette.M_3_SYS_ON_PRIMARY
  },
  AnnouncementDetailsButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    position: 'absolute',
    top: -20,
    left: 50
  }
}))

export default useStyles
