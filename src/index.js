import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {StatusBar} from 'react-native'
import MainNavigation from './navigations/mainNavigation'

const Main = () => {
  // useEffect(() => {
  //   const getAsyncData = async () => {
  //     const storedToken = await AsyncStorage.getItem('token')
  //     const storedPageID = await AsyncStorage.getItem('pageID')
  //     const storedUser = await AsyncStorage.getItem('user')
  //     const storedIsPersonal = await AsyncStorage.getItem('isPersonal')
  //     const storedProfileImage = await AsyncStorage.getItem('profileImage')
  //     dispatch(
  //       setTokenAndhideSplashScreen({
  //         token: storedToken,
  //         pageID: storedPageID,
  //         user: JSON.parse(storedUser),
  //         isPersonal: storedIsPersonal,
  //         profileImage: storedProfileImage
  //       })
  //     )
  //   }
  //   getAsyncData()
  // }, [dispatch])

  // if (showSplash) {
  //   return <SplashScreen />
  // }
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {<MainNavigation />}
    </NavigationContainer>
  )
}

export default Main
