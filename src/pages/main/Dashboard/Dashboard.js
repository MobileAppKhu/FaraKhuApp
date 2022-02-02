import {View} from 'react-native'
import React from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import UpcomingEvent from './UpcomingEvent/UpcomingEvent'
import DashbaordMenu from './DashbaordMenu/DashbaordMenu'
import NotificationsImages from './NotificationsImages/NotificationsImages'
import InternetManagement from './InternetManagement'
import NotificationModal from './NotificationModal'

export default function Dashboard() {
  return (
    <View style={styles.root}>
      <DashboardHeader />
      <ScrollView>
        <UpcomingEvent />
        <View style={styles.seprator} />
        <InternetManagement />
        <View style={styles.seprator} />
        <DashbaordMenu />
        <View style={styles.seprator} />
        <NotificationsImages />
      </ScrollView>
      <NotificationModal isVisible={false} />
    </View>
  )
}
