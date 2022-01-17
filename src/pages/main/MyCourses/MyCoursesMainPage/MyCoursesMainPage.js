import React from 'react'
import {View} from 'react-native'
import styles from './stylesheet'
import MyCoursesMainPageHeader from './MyCoursesMainPageHeader/MyCoursesMainPageHeader'
import MyCoursesMainPageCourseItem from './MyCoursesMainPageCourseItem/MyCoursesMainPageCourseItem'
import {ScrollView} from 'react-native-gesture-handler'
import CustomButton from '../../../../components/CustomButton'
import palette from './../../../../theme/palette'
export default function MyCoursesMainPage() {
  return (
    <View style={styles.root}>
      <MyCoursesMainPageHeader />
      <ScrollView>
        <View style={styles.courseContainer}>
          {courses.map(({title, courseNumber, teacherName}, index) => (
            <MyCoursesMainPageCourseItem
              title={title}
              courseNumber={courseNumber}
              teacherName={teacherName}
              key={index.toString() + courseNumber}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="برنامه امتحانات"
          type="cancel"
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          startIcon="icons_exam"
          startIconSize={19}
          startIconColor={palette.M_3_SYS_PRIMARY}
          size="small"
        />
        <CustomButton
          title="برنامه ی هفتگی"
          type="cancel"
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          size="small"
          startIcon="timeline_week"
          startIconSize={19}
          startIconColor={palette.M_3_SYS_PRIMARY}
        />
      </View>
    </View>
  )
}
const courses = [
  {
    title: 'هوش مصنوعی و سیستم ها',
    courseNumber: '۱۷۱۱۱۳۲_۰۱',
    teacherName: 'میرحسین پدارم'
  },
  {
    title: 'مهندسی نرم افزار',
    courseNumber: '۱۷۱۱۱۳۲_۰۱',
    teacherName: 'سیده لیلی میرطاهری'
  },
  {
    title: 'هوش مصنوعی و سیستم ها',
    courseNumber: '۱۷۱۱۱۳۲_۰۱',
    teacherName: 'میرحسین پدارم'
  },
  {
    title: 'مهندسی نرم افزار',
    courseNumber: '۱۷۱۱۱۳۲_۰۱',
    teacherName: 'سیده لیلی میرطاهری'
  },
  {
    title: 'هوش مصنوعی و سیستم ها',
    courseNumber: '۱۷۱۱۱۳۲_۰۱',
    teacherName: 'میرحسین پدارم'
  }
]
