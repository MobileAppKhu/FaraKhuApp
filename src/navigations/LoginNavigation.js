import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import LoginPage from '../pages/auth/loginPage/LoginPage'
import LandingPage from '../pages/auth/landingPage/LandingPage'
import ForgetPassword from '../pages/auth/forgetPassword/ForgetPassword'
import Welcome from '../pages/auth/welcom/Welcome'
import ConfirmCodePage from '../pages/auth/forgetPassword/confirmCodePage/ConfirmCodePage'
import Welcome2 from './../pages/auth/welcome/Welcome2'
const Stack = createStackNavigator()

export default function LoginNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="signin">
      <Stack.Screen name="welcome-2" component={Welcome2} />
      <Stack.Screen name="landing-page" component={LandingPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="forget-password" component={ForgetPassword} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="confirm-code-page" component={ConfirmCodePage} />
    </Stack.Navigator>
  )
}
