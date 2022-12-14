import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  container: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER
  },
  AnnouncementHeader: {
    height: 64,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: palette.M_3_SYS_PRIMARY
  },
  pageTitle: {
    color: palette.M_3_SYS_ON_PRIMARY,
    marginHorizontal: 70
  },
  AnnouncementTitleContainer: {
    paddingHorizontal: 25,
    paddingVertical: 16
  },
  AnnouncemenAuthor: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 10
  },
  AnnouncemenDate: {
    marginTop: 5
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
  },
  modal: {
    paddingVertical: 16,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.M_3_READ_ONLY_SURFACE_3,
    position: 'absolute',
    paddingHorizontal: 24,
    top: 0,
    right: 0,
    elevation: 10,
    borderRadius: 16
  },
  editIcon: {
    marginLeft: 12
  }
}))

export default useStyles
