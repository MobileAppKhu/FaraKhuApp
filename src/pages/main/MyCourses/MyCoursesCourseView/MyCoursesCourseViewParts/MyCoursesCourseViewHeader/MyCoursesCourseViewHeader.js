import React from 'react'
import {Image, ImageBackground, Pressable, View} from 'react-native'
import CustomIcon from '../../../../../../components/CustomIcon'
import palette from '../../../../../../theme/palette'

import styles from './stylesheet'
import Typography from '../../../../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
export default function MyCoursesCourseViewHeader({courseName, teacherName}) {
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={require('../../../../../../assets/images/my-course-test.jpg')}
      style={styles.root}>
      <View style={styles.moreOption}>
        <Pressable onPress={() => navigation.goBack()}>
          <CustomIcon
            name="icons8_back-1-False"
            size={30}
            color={palette.M_3_SYS_INVERSE_ON_SURFACE}
          />
        </Pressable>
        <Pressable>
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
