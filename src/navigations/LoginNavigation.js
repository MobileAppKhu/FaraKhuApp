import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import LoginPage from '../pages/auth/loginPage/LoginPage'
import LandingPage from '../pages/auth/landingPage/LandingPage'

const Stack = createStackNavigator()

export default function LoginNavigation() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="signin">
      <Stack.Screen name="landing-page" component={LandingPage} />
      <Stack.Screen name="login" component={LoginPage} />
    </Stack.Navigator>
  )
}
