import {Image, View} from 'react-native'
import React from 'react'
import useStyles from './stylesheet'
import Typography from '../../../../../components/Typography'
import {useSelector} from 'react-redux'
import {generateJalaaliDate} from '../../../../../helpers/date'
export default function NewsListItem() {
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
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
          {generateJalaaliDate('1400-11-28')}
        </Typography>
      </View>
    </View>
  )
}
