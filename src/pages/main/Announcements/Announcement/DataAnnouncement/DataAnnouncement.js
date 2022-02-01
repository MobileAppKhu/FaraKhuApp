import React from 'react'
import styles from './stylesheet'
import {Image, Pressable, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import CustomIcon from '../../../../../components/CustomIcon'

export default function DataAnnouncement({
  teacherName,
  // eslint-disable-next-line no-unused-vars
  teacherImage,
  text,
  date,
  onPress
}) {
  const navigation = useNavigation()
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <View style={styles.cardStyle}>
        <View style={styles.imgTeachStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../../../../../assets/images/sample_avatar.jpg')}
          />
          <View style={styles.teacherName}>
            <Typography variant="black11" color={palette.M_3_SYS_PRIMARY}>
              {teacherName}
            </Typography>
          </View>
        </View>
        <View style={styles.textIcon}>
          <Typography variant="h5" color={palette.M_3_SYS_TERTIARY}>
            {text}
          </Typography>
        </View>
        <View style={styles.dateStyle}>
          <Typography variant="black11" color={palette.M_3_SYS_TERTIARY}>
            {date}
          </Typography>
        </View>
      </View>
      <View style={styles.iconStyle}>
        <Pressable>
          <CustomIcon
            name="icons8_back-1-False"
            size={24}
            color={palette.M_3_SYS_TERTIARY}
          />
        </Pressable>
      </View>
    </Pressable>
  )
}
