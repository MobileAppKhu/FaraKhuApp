import DashboardNavigation from './DashboardNavigation'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import LoginNavigation from './LoginNavigation'
import {saveUser} from '../redux/auth/actions'
import {getUserFromStorage} from '../helpers/userData'
// import {AsyncStorage} from 'react-native'
// import _ from 'underscore'

export default function MainNavigation() {
  const dispatch = useDispatch()

  const getData = async () => {
    // await AsyncStorage.removeItem('token')
    // const data = await AsyncStorage.getItem('token')
    // console.log(data)
    // await AsyncStorage.clear()
    const token = await getUserFromStorage()
    dispatch(saveUser(token))
  }
  useEffect(() => {
    getData()
  }, [dispatch])
  let {token} = useSelector((state) => state.authReducer)
  // console.log(token)
  return token ? <DashboardNavigation /> : <LoginNavigation />
}
