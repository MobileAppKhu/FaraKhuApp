import React from 'react'
import {View} from 'react-native'
import DashboardButtonPage from '../Components/DashboardButtonPage/DashboardButtonPage'
import styles from './stylesheet'
import {useNavigation} from '@react-navigation/native'

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
        onPress={() => navigation.navigate('setting')}
      />
      <DashboardButtonPage title="ایمیل دانشگاهی" iconName="mail_outline" />
      <DashboardButtonPage title="نقشه" iconName="icons8_map_marker_1-1" onPress={() => navigation.navigate('each-bookshop')}/>
      <DashboardButtonPage
        title="کتاب یاب"
        iconName="icons8_books-1-exchange"
        onPress={() => navigation.navigate('bookshop-view')}
      />
    </View>
  )
}
