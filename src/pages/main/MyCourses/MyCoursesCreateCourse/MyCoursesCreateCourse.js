import React, {useCallback, useState} from 'react'
import {View, Pressable, ScrollView, BackHandler} from 'react-native'
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import {useFormik} from 'formik'
import {useSelector} from 'react-redux'
import * as Yup from 'yup'

import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import CustomButton from '../../../../components/CustomButton'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import ImagePicker from '../../../../components/ImagePicker'
import useStyles from './stylessheet'
import CloseModal from './Modals/CloseModal'
import GeneralInfo from './Sections/GeneralInfo'
import DaysDatePlace from './Sections/DaysDatePlace'
import Students from './Sections/Students'

export const createEmptyDay = () => ({
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
})

const validationSchema = Yup.object().shape({
  profID: Yup.string()
    .matches(/\d{9}/, '* شماره استادی می‌بایست 9 رقم باشد.')
    .required('وارد کردن "شماره استادی" الزامی می‌باشد.'),
  faculty: Yup.string().required('* انتخاب "دانشکده" الزامی می‌باشد.'),
  department: Yup.string().required('* انتخاب "گروه درسی" الزامی می‌باشد.'),
  courseName: Yup.string().required('* انتخاب "نام درس" الزامی می‌باشد.'),
  days: Yup.array().min(
    1,
    '* مشخص کردن "روز های برگزاری کلاس" الزامی می‌باشد.'
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

  const [closeModal, setCloseModal] = useState(false)

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
      days: [createEmptyDay()],
      finalExamDay: '',
      finalExamMonth: '',
      finalExamYear: '',
      classPlace: '',
      students: []
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values.days.length)
  })

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
        {/* (profID - faculty - department - courseName) inputs */}
        <GeneralInfo
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          setFieldTouched={setFieldTouched}
        />

        <HorizontalSeparator margin={20} />

        {/* image inputs */}
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

        {/* (days - finalExamDate - classPlace) inputs */}
        <DaysDatePlace
          values={values}
          touched={touched}
          errors={errors}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          handleChange={handleChange}
        />

        <HorizontalSeparator margin={20} />

        {/* (students) inputs */}
        <Students values={values} setFieldValue={setFieldValue} />

        <CustomButton
          title="ایجاد کلاس +"
          size="small"
          onPress={handleSubmit}
          style={{marginVertical: 30}}
        />
      </ScrollView>
    </View>
  )
}

export default MyCoursesCreateCourse
