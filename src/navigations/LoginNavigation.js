import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import LoginPage from '../pages/auth/loginPage/LoginPage'
import LandingPage from '../pages/auth/landingPage/LandingPage'
import ForgetPassword from '../pages/auth/forgetPassword/ForgetPassword'
import FirstWelcomePage from '../pages/auth/firstWelcomePage/FirstWelcomePage'
import ConfirmCodePage from '../pages/auth/forgetPassword/confirmCodePage/ConfirmCodePage'
import SecondWelcomePage from '../pages/auth/secondWelcomePage/SecondWelcomePage'
import NewsForGuests from '../pages/main/News/NewsForGuests'
const Stack = createStackNavigator()

export default function LoginNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="signin">
      <Stack.Screen name="landing-page" component={LandingPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="forget-password" component={ForgetPassword} />
      <Stack.Screen name="first-welcome" component={FirstWelcomePage} />
      <Stack.Screen name="second-welcome" component={SecondWelcomePage} />
      <Stack.Screen name="confirm-code-page" component={ConfirmCodePage} />
      <Stack.Screen name="news" component={NewsForGuests} />
    </Stack.Navigator>
  )
}
