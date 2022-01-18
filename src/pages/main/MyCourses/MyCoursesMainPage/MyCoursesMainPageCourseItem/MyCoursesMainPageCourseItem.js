import React from 'react'
import styles from './stylesheet'
import {ImageBackground, Pressable, View} from 'react-native'
import palette from '../../../../../theme/palette'
import Typography from '../../../../../components/Typography'
// import Typography from '../../../../../components/Typography'
// import palette from '../../../../../theme/palette'
import {useNavigation} from '@react-navigation/native'
export default function MyCoursesMainPageCourseItem({
  title,
  courseNumber,
  teacherName
}) {
  const navigation = useNavigation()
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
