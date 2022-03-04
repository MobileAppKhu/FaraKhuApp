import {Image, View} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import palette from '../../../../../theme/palette'
import Typography from '../../../../../components/Typography'
export default function NewsListItem() {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image />
      </View>
      <View style={styles.textContainer}>
        <Typography variant="h5" color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
          اختتامیه اولین مسابقه ملی ایده‌های زیست فناورانه
        </Typography>
        <Typography
          variant="body2"
          color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
          23 آذر 1400
        </Typography>
      </View>
    </View>
  )
}
