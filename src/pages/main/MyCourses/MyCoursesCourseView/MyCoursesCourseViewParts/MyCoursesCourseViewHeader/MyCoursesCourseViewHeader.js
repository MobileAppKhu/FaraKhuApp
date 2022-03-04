import React from 'react'
import {Image, ImageBackground, Pressable, View} from 'react-native'
import CustomIcon from '../../../../../../components/CustomIcon'

import useStyles from './stylesheet'
import Typography from '../../../../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from "react-redux";

const androidRipple = {color: '#ddd', borderless: true, radius: 24}

export default function MyCoursesCourseViewHeader({
  courseName,
  teacherName,
  onPressThreeDot
}) {
  const navigation = useNavigation()
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <ImageBackground
      source={require('../../../../../../assets/images/my-course-test.jpg')}
      style={styles.root}>
      <View style={styles.moreOption}>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={androidRipple}>
          <CustomIcon
            name="icons8_back-1-False"
            size={30}
            color={palette.M_3_SYS_INVERSE_ON_SURFACE}
          />
        </Pressable>
        <Pressable onPress={onPressThreeDot} android_ripple={androidRipple}>
          <CustomIcon
            name="more_vert_24px"
            size={30}
            color={palette.M_3_SYS_INVERSE_ON_SURFACE}
          />
        </Pressable>
      </View>
      <View style={styles.information}>
        <Typography variant="h3" color={palette.M_3_SYS_ON_PRIMARY}>
          {courseName}
        </Typography>
        <View style={styles.teacherContainer}>
          <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
            {teacherName}
          </Typography>
          <Image
            source={require('../../../../../../assets/images/sample_avatar.jpg')}
            style={styles.teacherImage}
          />
        </View>
      </View>
    </ImageBackground>
  )
}
