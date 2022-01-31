import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  focusedContainer: {
    paddingEnd: 32,
    paddingStart: 16
  },
  PollOption: {
    width: '100%',
    padding: 16,
    borderRadius: 7,
    marginVertical: 8,
    alignSelf: 'center',
    backgroundColor: palette.M_3_SYS_SURFACE,
    elevation: 3
  },
  focusedOption: {
    borderWidth: 1,
    borderColor: palette.M_3_SYS_PRIMARY,
    elevation: 5,
    marginRight: 8
  },
  titleAndPercentage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  percentageProgressBar: {
    width: '100%',
    height: 4,
    flexDirection: 'row-reverse',
    borderRadius: 25,
    marginVertical: 8,
    backgroundColor: palette.M_3_SYS_PRIMARY_CONTAINER
  },
  percentageProgressValue: {
    height: 4,
    borderRadius: 25,
    backgroundColor: palette.M_3_SYS_PRIMARY
  },
  voteContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
})

export default styles
