import DashboardNavigation from './DashboardNavigation'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import LoginNavigation from './LoginNavigation'
import {saveUser} from '../redux/auth/actions'
import {getUserFromStorage} from '../helpers/userData'
// import _ from 'underscore'

export default function MainNavigation() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(saveUser(getUserFromStorage()))
  }, [dispatch])
  let {token} = useSelector((state) => state.authReducer)
  return token ? <DashboardNavigation /> : <LoginNavigation />
}
