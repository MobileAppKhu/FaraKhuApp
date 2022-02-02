import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_SURFACE
  },
  card: {
    flexDirection: 'row-reverse',
    marginHorizontal: 12,
    marginTop: 22,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageText: {
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  textCard: {
    marginRight: 16
  },
  buttonCard: {
    height: 36,
    marginRight: 16,
    backgroundColor: palette.M_3_REF_PRIMARY_PRIMARY_40,
    borderRadius: 8,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPressable: {
    marginHorizontal: 8
  },
  iconPressable: {
    marginHorizontal: 8
  },
  imageStyle: {
    width: 38,
    height: 38,
    // marginTop: 24,
    // marginBottom: 8,
    borderRadius: 19,
    marginRight: 8,
    paddingTop: 9
  },
  buttonCardmain: {
    width: 189,
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.M_3_SYS_OUTLINE,
    borderRadius: 8,
    marginBottom: 32
  },
  buttonCard2: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    padding: 10
  },
  textCard2: {},

  iconCard2: {}
})
export default styles
