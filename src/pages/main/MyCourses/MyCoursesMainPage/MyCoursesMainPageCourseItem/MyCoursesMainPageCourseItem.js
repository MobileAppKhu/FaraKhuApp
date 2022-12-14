import React from 'react'
import useStyles from './stylesheet'
import {ImageBackground, Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from "react-redux";
export default function MyCoursesMainPageCourseItem({
  title,
  courseNumber,
  teacherName
}) {
  const navigation = useNavigation()
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate('course-view')}>
      <ImageBackground
        source={require('../../../../../assets/images/my-course-test.jpg')}
        style={styles.imageBackground}
        borderRadius={12}>
        <Pressable style={styles.contianer}>
          <View style={styles.titleContianer}>
            <Typography color={palette.M_3_READ_ONLY_WHITE} variant="bold12">
              {title.length > 16 ? title.substr(0, 15) + '...' : title}
            </Typography>
          </View>
          <View style={styles.courseNumberContainer}>
            <Typography color={palette.M_3_READ_ONLY_WHITE} variant="regular9">
              {courseNumber}
            </Typography>
          </View>
          <View style={styles.teacherNameContainer}>
            <Typography color={palette.M_3_READ_ONLY_WHITE} variant="regular10">
              {teacherName}
            </Typography>
          </View>
        </Pressable>
      </ImageBackground>
    </Pressable>
  )
}
