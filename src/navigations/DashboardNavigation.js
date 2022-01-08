import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Dashboard from '../pages/main/Dashboard/Dashboard'
import Announcement from "../pages/announcements/Announcement/Announcement";
import AnnouncementItem from "../pages/announcements/AnnouncementItem/AnnouncementItem";
const Stack = createStackNavigator()

export default function DashboardNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="mainpage">
      <Stack.Screen name="landing-page" component={Dashboard} />
      <Stack.Screen name="announcement" component={Announcement}/>
      <Stack.Screen name="announcement-item" component={AnnouncementItem}/>
    </Stack.Navigator>
  )
}
