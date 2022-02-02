import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import DashboardNavigation from '../DashboardNavigation'
import CustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#f2f5fb',
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15
        }
      }}>
      <Drawer.Screen name="Dashboard" component={DashboardNavigation} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
