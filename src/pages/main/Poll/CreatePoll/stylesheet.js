import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

export default StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  tagContainer: {
    flexDirection: 'row',
    paddingEnd: 10,
    marginTop: 16,
    justifyContent: 'flex-end'
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: palette.M_3_REF_SECONDARY_SECONDARY_40
  },
  inputLabel: {
    fontSize: 14
  },
  input: {
    borderColor: palette.M_3_SYS_OUTLINE,
    borderWidth: 1
  },
  pollOptionsTitle: {
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    marginBottom: 15
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    paddingBottom: 15
  }
})
