import React, {useRef, useState} from 'react'
import {View, Pressable, ScrollView, TextInput} from 'react-native'

import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import CustomInput from '../../../../components/CustomInput'
import CustomButton from '../../../../components/CustomButton'
import palette from '../../../../theme/palette'
import CustomPicker from '../../../../components/CustomPicker'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import ImagePicker from '../../../../components/ImagePicker'
import DayPicker from './DayPicker'
import styles from './stylessheet'
import {useNavigation} from '@react-navigation/native'

const {M_3_SYS_PRIMARY: primaryColor} = palette
const dayTemplate = {
  id: 0,
  day: '',
  startTime: {
    hour: '08',
    minute: '00'
  },
  endTime: {
    hour: '10',
    minute: '00'
  }
}

function MyCoursesCreateCourse() {
  const navigation = useNavigation()
  // States
  const [faculty, setFaculty] = useState('')
  const [department, setDepartment] = useState('')
  const [courseName, setCourseName] = useState('')
  const [image, setImage] = useState(null)
  const [days, setDays] = useState([])
  const [day, setDay] = useState(dayTemplate)
  const [finalExamDate, setFinalExamDate] = useState({
    day: '',
    month: '',
    year: ''
  })
  const [students, setStudents] = useState([])
  const [student, setStudent] = useState({
    name: 'نام دانشجو',
    stuID: ''
  })
  const [profID, setProfID] = useState('')

  //Refs
  const studentList = useRef()

  //Methods
  const handleDayChange = (value, day) => {
    let selectedDay = days.findIndex((d) => d.id === day.id)
    let newDays = [...days]
    newDays[selectedDay] = {...newDays[selectedDay], day: value}
    setDays(newDays)
  }

  const handleTimeChange = (value, field, day, timeType) => {
    // timeType = startTime or endTime  | field = hour or minute
    let selectedDay = days.findIndex((d) => d.id === day.id)
    let newDays = [...days]
    newDays[selectedDay] = {
      ...newDays[selectedDay],
      [timeType]: {
        ...newDays[selectedDay][timeType],
        [field]: value
      }
    }
    setDays(newDays)
  }

  const handleStudentChange = (value, stu) => {
    let selectedStudent = students.findIndex((s) => s.stuID === stu.stuID)
    let newStudents = [...students]
    newStudents[selectedStudent] = {
      ...newStudents[selectedStudent],
      stuID: value
    }
    setStudents(newStudents)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Typography style={styles.pageTitle}>درس جدید</Typography>
        <Pressable
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
          android_ripple={{
            color: palette.M_3_SYS_ON_PRIMARY,
            borderless: true,
            radius: 30
          }}>
          <CustomIcon
            name="close_24px"
            size={24}
            color={palette.M_3_SYS_ON_PRIMARY}
          />
        </Pressable>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <CustomInput
            label="استاد درس:"
            placeholder="شماره استادی"
            keyboardType="numeric"
            maxLength={9}
            labelColor={primaryColor}
            labelStyle={{fontSize: 14, fontFamily: 'Shabnam'}}
            style={styles.textInput}
            value={profID}
            onChangeText={(id) => setProfID(id)}
          />
          <CustomPicker
            label="دانشکده:"
            items={[
              'فنی مهندسی',
              'ریاضی',
              'ادبیات',
              'فنی مهندسی',
              'ریاضی',
              'ادبیات',
              'فنی مهندسی',
              'ریاضی'
            ]}
            labelColor={primaryColor}
            selectedItem={faculty}
            onSelectItem={(faculty) => setFaculty(faculty)}
          />
          <CustomPicker
            label="گروه درسی:"
            items={['برق', 'کامپیوتر', 'عمران']}
            labelColor={primaryColor}
            selectedItem={department}
            onSelectItem={(dep) => setDepartment(dep)}
          />
          <CustomPicker
            label="نام درس:"
            items={['کامپایلر', 'ریاضی', 'ادبیات عمومی', 'معماری کامپیوتر']}
            labelColor={primaryColor}
            selectedItem={courseName}
            onSelectItem={(crs) => setCourseName(crs)}
          />
        </View>

        <HorizontalSeparator margin={20} />

        <View style={styles.imageInput}>
          <ImagePicker
            imageUri={image}
            onChangeImage={(uri) => setImage(uri)}
            width={144}
            height={144}
          />
          <Typography variant="body1" color={primaryColor}>
            آپلود عکس برای ارسال:
          </Typography>
        </View>

        <HorizontalSeparator margin={20} />

        <View style={styles.daysExamPlace}>
          <Typography
            variant="body1"
            color={primaryColor}
            style={{marginBottom: 5}}>
            روز های برگزاری:
          </Typography>
          <View>
            {days.map((day, index) => (
              <DayPicker
                selectedDay={day}
                onSelectDay={(value) => {
                  handleDayChange(value, day)
                }}
                onStartTimeChange={(value, field) => {
                  handleTimeChange(value, field, day, 'startTime')
                }}
                onEndTimeChange={(value, field) => {
                  handleTimeChange(value, field, day, 'endTime')
                }}
                key={index}
                style={{marginVertical: 5}}
              />
            ))}
            <DayPicker
              selectedDay={day}
              onSelectDay={(value) => setDay({...day, day: value})}
              onStartTimeChange={(value, field) => {
                setDay({...day, startTime: {...day.startTime, [field]: value}})
              }}
              onEndTimeChange={(value, field) => {
                setDay({...day, endTime: {...day.endTime, [field]: value}})
              }}
              style={{marginVertical: 5}}
            />
          </View>

          <View style={styles.addDayContainer}>
            <Pressable
              android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
              style={styles.addDay}
              onPress={() => {
                setDays([...days, day])
                setDay({...dayTemplate, id: ++day.id})
              }}>
              <Typography variant="h6" color={primaryColor}>
                اضافه کردن روز جدید
              </Typography>
              <CustomIcon name="icon_add" size={18} color={primaryColor} />
            </Pressable>
          </View>

          <View style={styles.finalExamDate}>
            <Typography variant="body1" color={primaryColor}>
              تاریخ امتحان پایان ترم:
            </Typography>
            <View style={styles.dateInput}>
              <TextInput
                maxLength={2}
                placeholder="روز"
                keyboardType="numeric"
                textAlign="center"
                onChangeText={(day) => {
                  setFinalExamDate({...finalExamDate, day})
                }}
                style={styles.dateTextInput}
              />
              <Typography style={{padding: 0, margin: 0}}>{`/`}</Typography>
              <TextInput
                maxLength={2}
                placeholder="ماه"
                keyboardType="numeric"
                textAlign="center"
                onChangeText={(month) => {
                  setFinalExamDate({...finalExamDate, month})
                }}
                style={styles.dateTextInput}
              />
              <Typography style={{padding: 0, margin: 0}}>{`/`}</Typography>
              <TextInput
                maxLength={4}
                placeholder="سال"
                keyboardType="numeric"
                textAlign="center"
                onChangeText={(year) => {
                  setFinalExamDate({...finalExamDate, year})
                }}
                style={styles.dateTextInput}
              />
            </View>
          </View>
        </View>

        <HorizontalSeparator margin={20} />

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
                <Typography>{students.length} نفر</Typography>
              </View>

              <Pressable
                android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
                style={styles.addDay}
                onPress={() => {
                  setStudents([...students, student])
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
              {students.map((stu, index) => (
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
          <CustomButton
            title="ایجاد کلاس +"
            size="small"
            style={{marginTop: 30}}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default MyCoursesCreateCourse
