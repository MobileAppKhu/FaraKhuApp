import React from 'react'
import {View} from 'react-native'
import DashboardButtonPage from '../Components/DashboardButtonPage/DashboardButtonPage'
import styles from './stylesheet'
import {useNavigation} from '@react-navigation/native'
import openMap from 'react-native-open-maps'

export default function DashbaordMenu() {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <DashboardButtonPage
        title="درس های من"
        iconName="icons8_teacher-1-course"
        onPress={() => navigation.navigate('my-courses-main-page')}
      />
      <DashboardButtonPage
        title="اخبار و رویدادها"
        iconName="icons8_rss-1-news"
        onPress={() => navigation.navigate('personal-calendar')}
      />
      <DashboardButtonPage
        title="فراخوان ها"
        iconName="icons8_commercial-1-announcement"
        onPress={() => navigation.navigate('announcement')}
      />
      <DashboardButtonPage
        title="کتابخانه مرکزی"
        iconName="icons8_book_shelf-1-library"
        onPress={() =>
          navigation.navigate('web-view', {
            uri: 'http://library.khu.ac.ir/'
          })
        }
      />
      <DashboardButtonPage
        title="ایمیل دانشگاهی"
        iconName="mail_outline"
        onPress={() =>
          navigation.navigate('web-view', {
            uri: 'https://mail.khu.ac.ir/'
          })
        }
      />
      <DashboardButtonPage
        title="نقشه"
        iconName="icons8_map_marker_1-1"
        onPress={() => openMap({latitude: 35.858789, longitude: 50.914745})}
      />
      <DashboardButtonPage
        title="کتاب یاب"
        iconName="icons8_books-1-exchange"
        onPress={() => navigation.navigate('bookshop-view')}
      />
      <DashboardButtonPage
        title="سامانه احراز هویت "
        iconName="icons8_books-1-exchange"
        onPress={() =>
          navigation.navigate('web-view', {
            uri: 'https://my.khu.ac.ir/'
          })
        }
      />
    </View>
  )
}
