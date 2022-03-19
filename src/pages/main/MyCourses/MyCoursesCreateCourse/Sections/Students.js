import React, {useState, useRef} from 'react'
import {View, Pressable, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import CustomIcon from '../../../../../components/CustomIcon'

import CustomInput from '../../../../../components/CustomInput'
import Typography from '../../../../../components/Typography'
import makeStyles from '../../../../../helpers/makeStyles'

export default function Students({values, setFieldValue}) {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const {M_3_SYS_PRIMARY: primaryColor} = palette

  const [student, setStudent] = useState({
    name: 'نام دانشجو',
    stuID: ''
  })

  const studentList = useRef()

  const handleStudentChange = (value, stu) => {
    let selectedStudent = values.students.findIndex(
      (s) => s.stuID === stu.stuID
    )
    let newStudents = [...values.students]
    newStudents[selectedStudent] = {
      ...newStudents[selectedStudent],
      stuID: value
    }
    setFieldValue('students', newStudents)
  }

  return (
    <View style={styles.students}>
      <Typography
        variant="body1"
        color={primaryColor}
        style={{marginBottom: 5}}>
        دانشجویان کلاس:
      </Typography>

      <View style={styles.studentsBox}>
        <View style={styles.studentsHeader}>
          <View style={{flexDirection: 'row-reverse'}}>
            <Typography>تعداد: </Typography>
            <Typography>{values.students.length} نفر</Typography>
          </View>

          <Pressable
            android_ripple={{
              color: palette.M_3_SYS_PRIMARY_CONTAINER
            }}
            style={styles.addDay}
            onPress={() => {
              setFieldValue('students', [...values.students, student])
              setStudent({name: 'نام دانشجو', stuID: ''})
            }}>
            <Typography variant="h6" color={primaryColor}>
              دانشجوی جدید
            </Typography>
            <CustomIcon name="icon_add" size={18} color={primaryColor} />
          </Pressable>
        </View>

        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.studentsList}
          onContentSizeChange={() => studentList.current.scrollToEnd()}
          ref={studentList}>
          {values.students.map((stu, index) => (
            <CustomInput
              placeholder="شماره دانشجویی"
              keyboardType="numeric"
              maxLength={9}
              defaultValue={stu.stuID}
              helperText={stu.name}
              helperTextStyle={styles.studentName}
              onChangeText={(text) => {
                handleStudentChange(text, stu)
              }}
              style={[styles.textInput, styles.stuNumberInput]}
              key={index}
            />
          ))}
          <CustomInput
            placeholder="شماره دانشجویی"
            keyboardType="numeric"
            maxLength={9}
            value={student.stuID}
            helperText="شماره دانشجویی را وارد کنید"
            helperTextStyle={styles.studentName}
            onChangeText={(text) =>
              setStudent({stuID: text, name: 'نام دانشجو'})
            }
            style={styles.textInput}
          />
        </ScrollView>
      </View>
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
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
  addDay: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
    paddingVertical: 10
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
  },
  textInput: {
    textAlign: 'right',
    fontSize: 16,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  }
}))
