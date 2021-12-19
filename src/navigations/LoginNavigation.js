import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import LoginPage from '../pages/auth/loginPage/LoginPage'
import LandingPage from '../pages/auth/landingPage/LandingPage'
import ForgetPassword from '../pages/auth/forgetPassword/ForgetPassword'
import ConfirmCodePage from '../pages/auth/forgetPassword/confirmCodePage/ConfirmCodePage'

const Stack = createStackNavigator()

export default function LoginNavigation() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="signin">
      <Stack.Screen name="landing-page" component={LandingPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="forget-password" component={ForgetPassword} />
      <Stack.Screen name="confirm-code-page" component={ConfirmCodePage} />
    </Stack.Navigator>
  )
}
