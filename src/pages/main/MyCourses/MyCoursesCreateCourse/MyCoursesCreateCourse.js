import React, {useCallback, useRef, useState} from 'react'
import {View, Pressable, ScrollView, TextInput, BackHandler} from 'react-native'
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import {useFormik} from 'formik'
import * as Yup from 'yup'

import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import CustomInput from '../../../../components/CustomInput'
import CustomButton from '../../../../components/CustomButton'
import CustomPicker from '../../../../components/CustomPicker'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import ImagePicker from '../../../../components/ImagePicker'
import DayPicker from './DayPicker'
import useStyles from './stylessheet'
import CloseModal from './Modals/CloseModal'
import {useSelector} from 'react-redux'
import ErrorMessage from '../../../../components/ErrroMessage'

const dayTemplate = {
  id: Date.now(),
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

const validationSchema = Yup.object().shape({
  profID: Yup.string()
    .matches(/\d{9}/, '* شماره استادی می‌بایست 9 رقم باشد.')
    .required('وارد کردن "شماره استادی" الزامی می‌باشد.'),
  faculty: Yup.string().required('* انتخاب "دانشکده" الزامی می‌باشد.'),
  department: Yup.string().required('* انتخاب "گروه درسی" الزامی می‌باشد.'),
  courseName: Yup.string().required('* انتخاب "نام درس" الزامی می‌باشد.'),
  days: Yup.array().min(
    1,
    '* مشخص کردن "روز های برگزاری کلاس" الزامی می‌باشد. \nبعد از انتخاب مقادیر، بر روی "اضافه کردن روز جدید +" کلیک کنید تا روز انتخابی شما اضافه شود.'
  ),
  finalExamDay: Yup.string().required(
    '* انتخاب "روز برگزاری امتحان" الزامی می‌باشد.'
  ),
  finalExamMonth: Yup.string().required(
    '* انتخاب "ماه برگزاری امتحان" الزامی می‌باشد.'
  ),
  finalExamYear: Yup.string().required(
    '* انتخاب "سال برگزاری امتحان" الزامی می‌باشد.'
  ),
  classPlace: Yup.string().required(
    '* انتخاب "محل برگزاری امحان" الزامی می‌باشد.'
  ),
  students: Yup.array()
})

function MyCoursesCreateCourse() {
  const navigation = useNavigation()
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const {M_3_SYS_PRIMARY: primaryColor} = palette

  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      profID: '',
      faculty: '',
      department: '',
      courseName: '',
      image: null,
      days: [],
      finalExamDay: '',
      finalExamMonth: '',
      finalExamYear: '',
      classPlace: '',
      students: []
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values)
  })

  // States
  const [day, setDay] = useState(dayTemplate)
  const [student, setStudent] = useState({
    name: 'نام دانشجو',
    stuID: ''
  })
  const [closeModal, setCloseModal] = useState(false)

  //Refs
  const studentList = useRef()

  // useEffect call
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setCloseModal(true)
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  //Methods
  const handleDayChange = (value, day) => {
    let selectedDay = values.days.findIndex((d) => d.id === day.id)
    let newDays = [...values.days]
    newDays[selectedDay] = {...newDays[selectedDay], day: value}
    setFieldValue('days', newDays)
  }

  const handleTimeChange = (value, field, day, timeType) => {
    // timeType = startTime or endTime  | field = hour or minute
    let selectedDay = values.days.findIndex((d) => d.id === day.id)
    let newDays = [...values.days]
    newDays[selectedDay] = {
      ...newDays[selectedDay],
      [timeType]: {
        ...newDays[selectedDay][timeType],
        [field]: value
      }
    }
    setFieldValue('days', newDays)
  }

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
    <View style={styles.screen}>
      <View style={styles.header}>
        <Typography style={styles.pageTitle}>درس جدید</Typography>
        <Pressable
          style={styles.closeButton}
          onPress={() => setCloseModal(true)}
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

      <CloseModal
        isVisible={closeModal}
        onClosePress={() => navigation.goBack()}
        onStayPress={() => setCloseModal(false)}
      />

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
            value={values.profID}
            onChangeText={handleChange('profID')}
            onBlur={() => setFieldTouched('profID')}
          />
          <ErrorMessage error={errors.profID} visible={touched.profID} />
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
            selectedItem={values.faculty}
            onSelectItem={handleChange('faculty')}
          />
          <ErrorMessage error={errors.faculty} visible={touched.faculty} />

          <CustomPicker
            label="گروه درسی:"
            items={['برق', 'کامپیوتر', 'عمران']}
            labelColor={primaryColor}
            selectedItem={values.department}
            onSelectItem={handleChange('department')}
          />
          <ErrorMessage
            error={errors.department}
            visible={touched.department}
          />

          <CustomPicker
            label="نام درس:"
            items={['کامپایلر', 'ریاضی', 'ادبیات عمومی', 'معماری کامپیوتر']}
            labelColor={primaryColor}
            selectedItem={values.courseName}
            onSelectItem={handleChange('courseName')}
          />
          <ErrorMessage
            error={errors.courseName}
            visible={touched.courseName}
          />
        </View>

        <HorizontalSeparator margin={20} />

        <View style={styles.imageInput}>
          <ImagePicker
            imageUri={values.image}
            onChangeImage={handleChange('image')}
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
            {values.days.map((day, index) => (
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
                setDay({
                  ...day,
                  startTime: {...day.startTime, [field]: value}
                })
              }}
              onEndTimeChange={(value, field) => {
                setDay({
                  ...day,
                  endTime: {...day.endTime, [field]: value}
                })
              }}
              style={{marginVertical: 5}}
            />
            <ErrorMessage error={errors.days} visible={touched.days} />
          </View>

          <View style={styles.addDayContainer}>
            <Pressable
              android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
              style={styles.addDay}
              onPress={() => {
                setFieldValue('days', [...values.days, day])
                setDay({...dayTemplate, id: Date.now()})
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
                value={values.finalExamDay}
                onChangeText={handleChange('finalExamDay')}
                onBlur={() => setFieldTouched('finalExamDay')}
                style={styles.dateTextInput}
              />
              <Typography style={{padding: 0, margin: 0}}>{`/`}</Typography>
              <TextInput
                maxLength={2}
                placeholder="ماه"
                keyboardType="numeric"
                textAlign="center"
                value={values.finalExamMonth}
                onChangeText={handleChange('finalExamMonth')}
                onBlur={() => setFieldTouched('finalExamMonth')}
                style={styles.dateTextInput}
              />
              <Typography style={{padding: 0, margin: 0}}>{`/`}</Typography>
              <TextInput
                maxLength={4}
                placeholder="سال"
                keyboardType="numeric"
                textAlign="center"
                value={values.finalExamYear}
                onChangeText={handleChange('finalExamYear')}
                onBlur={() => setFieldTouched('finalExamYear')}
                style={styles.dateTextInput}
              />
            </View>
          </View>
          <ErrorMessage
            error={errors.finalExamDay}
            visible={touched.finalExamDay}
          />
          <ErrorMessage
            error={errors.finalExamMonth}
            visible={touched.finalExamMonth}
          />
          <ErrorMessage
            error={errors.finalExamYear}
            visible={touched.finalExamYear}
          />
        </View>

        <View style={styles.classPlace}>
          <CustomInput
            placeholder="مکان برگزاری کلاس"
            value={values.classPlace}
            onChangeText={handleChange('classPlace')}
            onBlur={() => setFieldTouched('classPlace')}
            style={styles.textInput}
          />
          <ErrorMessage
            error={errors.classPlace}
            visible={touched.classPlace}
          />
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
          <CustomButton
            title="ایجاد کلاس +"
            size="small"
            onPress={handleSubmit}
            style={{marginVertical: 30}}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default MyCoursesCreateCourse
