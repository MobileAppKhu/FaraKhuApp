import {View} from 'react-native'
import React from 'react'
// import DashboardHeader from './DashboardHeader/DashboardHeader'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import UpcomingEvent from './UpcomingEvent/UpcomingEvent'
import DashbaordMenu from './DashbaordMenu/DashbaordMenu'
import SimpleHeader from '../../../components/SimpleHeader'
// import NotificationsImages from './NotificationsImages/NotificationsImages'
export default function Dashboard() {
  return (
    <View style={styles.root}>
      {/* <DashboardHeader /> */}
      <SimpleHeader title="Ridam to behnia" />
      <ScrollView>
        <UpcomingEvent />
        <View style={styles.seprator} />
        <DashbaordMenu />
        <View style={styles.seprator} />
        {/* <NotificationsImages /> */}
      </ScrollView>
    </View>
  )
}
