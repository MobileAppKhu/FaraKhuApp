import React from 'react'
import {View, Pressable, ScrollView, ImageBackground} from 'react-native'
import CustomIcon from '../../../components/CustomIcon'
import Typography from '../../../components/Typography'
import useStyles from './stylesheet'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import {generateJalaaliDate} from '../../../helpers/date'
import jMoment from 'moment-jalaali'
export default function NewsForGuests({route}) {
  const {title, fileId, description, createdDate} = route.params
  const {theme: palette} = useSelector((state) => state.authReducer)
  const androidRipple = {borderless: true, color: '#ddd', radius: 25}
  const navigation = useNavigation()
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/my-course-test.jpg')}
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
        </View>
        <View style={styles.information}>
          <Typography variant="h3" color={palette.M_3_SYS_ON_PRIMARY}>
            {title || 'اختتامیه اولین مسابقه ملی ایده های زیست فناوری'}
          </Typography>
        </View>
      </ImageBackground>

      <View style={styles.AnnouncementDetails}>
        <View style={styles.AnnouncementDetailsButton}>
          <Pressable
            android_ripple={{
              color: palette.M_3_SYS_SURFACE_VARIANT,
              radius: 30,
              borderless: true
            }}>
            <CustomIcon
              name="icons8_left_send"
              size={24}
              color={palette.M_3_REF_PRIMARY_PRIMARY_0}
            />
          </Pressable>
        </View>
        <View style={{marginHorizontal: 16}}>
          <Typography
            style={{marginBottom: 8}}
            variant="medium12"
            color={palette.M_3_SYS_OUTLINE}>
            {`تاریخ ارسال: ${generateJalaaliDate(
              jMoment(createdDate || '2022-03-07').format('jYYYY-jMM-jDD')
            )}`}
          </Typography>
          <ScrollView>
            <Typography
              variant="smallButton"
              color={palette.M_3_SYS_ON_BACKGROUND}>
              {description || 'متنی ندارد'}
            </Typography>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
