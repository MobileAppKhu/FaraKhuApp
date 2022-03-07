import {View, Pressable} from 'react-native'
import React from 'react'
import useStyles from './stylesheet'
import Typography from '../../../../../components/Typography'
import {useSelector} from 'react-redux'
import CustomImage from '../../../../../components/CustomImage'
import {generateJalaaliDate} from '../../../../../helpers/date'
import jMoment from 'moment-jalaali'
import {useNavigation} from '@react-navigation/native'
export default function NewsListItem({
  title,
  fileId,
  description,
  createdDate
}) {
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
  const date = jMoment(createdDate).format('jYYYY-jMM-jDD')
  const navigattion = useNavigation()
  const onPressFunction = () => {
    navigattion.navigate('news-view', {
      title,
      fileId,
      description,
      createdDate
    })
  }
  return (
    <Pressable style={styles.root} onPress={onPressFunction}>
      <View style={styles.imageContainer}>
        <CustomImage avatarId={fileId} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Typography variant="h5" color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
          {generateJalaaliDate(date)}
        </Typography>
      </View>
    </Pressable>
  )
}
