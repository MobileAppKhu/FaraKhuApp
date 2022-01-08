import {StyleSheet} from 'react-native'
import palette from '../../../theme/palette'

const styles = StyleSheet.create({
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
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: palette.M_3_SYS_ON_PRIMARY
  },
  AnnouncementDetailsButton: {
    width: 50,
    height: 50,
    borderRadius: 500,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    position: 'absolute',
    top: -20,
    left: 50
  }
})

export default styles
