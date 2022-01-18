import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
  screen: {
    flex: 1
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
  textInput: {
    textAlign: 'right',
    fontSize: 16,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  imageInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addDayContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    width: '100%'
  },
  addDay: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
    paddingVertical: 10
  },
  dateInput: {
    width: 147,
    height: 32,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 7
  },
  finalExamDate: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 15
  },
  dateTextInput: {padding: 0, paddingHorizontal: 5},
  studentsBox: {
    height: 322,
    marginTop: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  studentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: palette.M_3_SYS_OUTLINE
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
})

export default styles
