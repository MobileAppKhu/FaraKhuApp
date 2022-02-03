/* eslint-disable no-unused-vars */
import DashboardNavigation from './DashboardNavigation'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import LoginNavigation from './LoginNavigation'
import {getUserId, saveUser} from '../redux/auth/actions'
import {getUserFromStorage} from '../helpers/userData'
import DrawerNavigation from './DrawerNavigation'
// import {AsyncStorage} from 'react-native'
// import _ from 'underscore'
import {request} from '../helpers/request'
export const getUser = async () =>
  request('/User/GetUserId', 'POST', {}).then((data) => data.response.userId)
export default function MainNavigation() {
  const dispatch = useDispatch()

  const getData = async () => {
    const token = await getUserFromStorage()
    dispatch(saveUser(token))
  }

  const saveUserid = async () => {
    const id = await getUser()
    dispatch(getUserId(id))
  }
  let {token, userId} = useSelector((state) => state.authReducer)
  useEffect(() => {
    getData()
    if (token && !userId) {
      saveUserid()
    }
  }, [dispatch])
  return token ? <DrawerNavigation /> : <LoginNavigation />
}
