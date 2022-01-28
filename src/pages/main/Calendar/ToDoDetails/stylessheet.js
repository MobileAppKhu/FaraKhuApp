import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  date: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    flexDirection: 'row-reverse',
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  error: {
    color: palette.M_3_SYS_ERROR
  },
  description: {
    padding: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  tagContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 50
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: palette.M_3_REF_SECONDARY_SECONDARY_40
  },
  separator: {
    backgroundColor: palette.M_3_READ_ONLY_OUTLINE_OPACITY_0_16,
    width: '95%',
    alignSelf: 'flex-end'
  },
  deleteModal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsModalContainer: {
    flex: 1,
    margin: 0
  },
  optionsModal: {
    backgroundColor: '#e4ebf6',
    borderRadius: 20,
    position: 'absolute',
    top: 20,
    right: 30,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 10
  },
  optionsModalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 25
  },
  optionsModalItemText: {
    marginRight: 12
  }
})

export default styles
